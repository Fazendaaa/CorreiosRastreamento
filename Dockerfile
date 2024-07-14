FROM node:22.4.1 AS builder

WORKDIR /usr/src/

COPY package.json .

RUN [ "npm", "install"]

COPY jest.config.json .
COPY tsconfig.json .
COPY tests tests
COPY src src

ARG API=${API}

RUN [ "npm", "test" ]
RUN [ "npm", "run", "build" ]
