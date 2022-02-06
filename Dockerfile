FROM node:14

WORKDIR /app

COPY package*.json ./

COPY ./client/package*.json ./client/

RUN npm install --only=prod

WORKDIR /app/client

COPY ./client ./client/

RUN npm install 

RUN npm run-script build

WORKDIR /app

COPY . .

CMD ["npm", "run", "prod"]
