# build frontend
FROM node:14 as build
WORKDIR /app
COPY ./client/package*.json ./
COPY ./client/cypress ./cypress
RUN npm install
COPY ./client .
RUN npm run build

# build backend with frontend static files
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
COPY --from=build /app/build ./client/build
EXPOSE 5000
CMD ["npm", "start"]

