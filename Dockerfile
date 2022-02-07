FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

WORKDIR /app/client

COPY ./client/ ./

RUN npm install 

RUN npm run-script build

WORKDIR /app

COPY . .

CMD ["npm", "run", "prod"]
