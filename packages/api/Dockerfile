FROM node:10.16.1-alpine

WORKDIR /usr

COPY packages/api ./packages/api
COPY package.json .
COPY tsconfig.json .

WORKDIR /usr/packages/api

RUN yarn --ignore-scripts

CMD [ "yarn", "start:production" ]