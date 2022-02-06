FROM node:14

WORKDIR /app

COPY package*.json ./

COPY ./client/package*.json ./client/

RUN npm install --only=prod

WORKDIR /app/client

RUN npm install --only=prod

RUN npm run build

WORKDIR /app

COPY . .

CMD ["npm", "run", "prod"]
