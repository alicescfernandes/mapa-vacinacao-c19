FROM node:12

MAINTAINER Alice Fernandes <alicescfernandes@gmail.com>
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn --frozen-lockfile

COPY . ./

RUN npm link

EXPOSE 3000

CMD ["yarn", "start"] 