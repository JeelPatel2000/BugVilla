import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import http from 'utils/httpInstance';
import Avatar from 'components/common/Avatar';
import BugVillaLogo from 'components/common/Logo';
import Flex from 'components/common/Flex';
import IconLink from 'components/common/IconLink';

import SidebarWrapper, { SidebarLinks } from './Sidebar.style';
import { StoreState } from 'store';
import { logUserOut } from 'store/ducks/auth';

interface SidebarProps {
  isOpen?: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: StoreState) => state.auth.user);

  const logout = () => {
    http.get('/api/user/logout').then(data => {
      console.log('logged out');
      history.push('/');
      dispatch(logUserOut());
    });
  };

  return (
    <SidebarWrapper isOpen={isOpen}>
      <BugVillaLogo width="100px" />
      <div className="sidebar--sticky">
        <Flex align="center" justify="flex-start">
          <Avatar
            className="dashboard__avatar"
            width="130px"
            height="130px"
            size={130}
            username={user.username}
          />
          <div>
            <h2 className="text--bold">{user?.name}</h2>
            <p className="color--gray">@{user?.username}</p>
          </div>
        </Flex>

        <SidebarLinks>
          <Flex direction="column">
            <IconLink isNav icon="home" to="/dashboard/bugs">
              Dashboard
            </IconLink>
            <IconLink isNav icon="user" to="/profiles">
              Profiles
            </IconLink>
            <IconLink isNav icon="times" to="/dashboard/notifications">
              Notifications
            </IconLink>
            <IconLink isNav icon="times" to="/dashboard/bugs?status=closed">
              Closed
            </IconLink>
            <IconLink isNav icon="door-open" to="#" onClick={logout}>
              Logout
            </IconLink>
          </Flex>
        </SidebarLinks>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
