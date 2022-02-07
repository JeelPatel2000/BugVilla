FROM node:14

WORKDIR /app

COPY ./client/package*.json ./

RUN npm install

COPY ./client/ ./ 

RUN npm run-script build

EXPOSE 3000

CMD ["npm", "start"]
