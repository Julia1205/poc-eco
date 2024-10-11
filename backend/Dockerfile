# backend/Dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
CMD npm install
CMD npm install express
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]