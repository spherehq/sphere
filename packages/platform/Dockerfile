FROM node

ARG NPM_TOKEN

WORKDIR /usr/platform

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc

COPY package.json .

RUN yarn

RUN rm -f .npmrc

COPY . .