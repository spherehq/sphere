FROM node

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y tzdata locales

# Set the timezone
RUN echo "Europe/Berlin" | tee /etc/timezone && \
  ln -fs /usr/share/zoneinfo/Europe/Berlin /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata

# Set the locale for UTF-8 support
RUN echo en_US.UTF-8 UTF-8 >> /etc/locale.gen && \
  locale-gen && \
  update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

ARG NPM_TOKEN

WORKDIR /usr/cli

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc

COPY package.json .

RUN yarn

RUN rm -f .npmrc

COPY . .