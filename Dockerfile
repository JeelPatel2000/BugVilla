FROM node:14

WORKDIR /app

COPY package*.json ./

COPY ./client/package*.json ./client/

RUN npm install

WORKDIR /app/client

RUN npm run build

WORKDIR /app

COPY . .

CMD ["npm", "run", "prod"]
