import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[a-zA-Z0-9-]+$/gi, 'Username is invalid')
    .required(),
  name: yup
    .string()
    .min(6)
    .max(100)
    .trim()
    .required(),
  email: yup
    .string()
    .min(5)
    .max(100)
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .max(100)
    .required(),
  confirmPassword: yup
    .string()
    .min(6)
    .max(100)
    .oneOf([yup.ref('password'), null], 'Confirm Password does not match')
    .required(),
  avatar: yup.string()
});

export default SignupSchema;
