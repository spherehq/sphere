FROM node:10.16.0-alpine

ARG NPM_TOKEN

WORKDIR /usr/api

COPY package.json .

RUN yarn --ignore-scripts

COPY . .

CMD [ "yarn", "start:production" ]