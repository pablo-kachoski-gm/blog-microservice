FROM node:15.2.0-alpine3.10

WORKDIR /usr/app

# Improves container caching. Only install npm dependencies when package.json changes
COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]