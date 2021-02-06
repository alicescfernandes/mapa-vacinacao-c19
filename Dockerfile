FROM node

# Set git credentils (so that the container can commit inside)
# Do not use your password (use revocable github personal tokens) or another github account for this
ARG USERNAME=""
ARG PASSWORD=""

MAINTAINER Alice Fernandes <alicescfernandes@gmail.com>

WORKDIR /usr/src/app

# COPY . .

RUN git clone https://$USERNAME:$PASSWORD@github.com/alicescfernandes/mapa-vacinacao-c19.git .
RUN git checkout develop
RUN yarn
RUN git config user.name "Alice Fernandes (bot)"
RUN git config user.email "alicescfernandes@gmail.com"
RUN npm link

EXPOSE 3000

CMD yarn dev & daemon_data 