FROM node

MAINTAINER Alice Fernandes <alicescfernandes@gmail.com>

WORKDIR /usr/src/app

# COPY . .

RUN git clone https://github.com/alicescfernandes/mapa-vacinacao-c19.git .
RUN git checkout develop
RUN yarn
RUN npm link

EXPOSE 3000

CMD yarn dev & daemon_data 