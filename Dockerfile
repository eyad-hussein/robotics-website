FROM node:20

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . /frontend

EXPOSE 3000

CMD ["npm", "start"]

