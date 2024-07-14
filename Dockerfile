FROM node:22.4.1 AS builder

WORKDIR /usr/src/

COPY package.json .

RUN [ "npm", "install"]

COPY tsconfig.json .
COPY jest.config.json .
COPY tests tests
COPY src src

ARG API=${API}

RUN [ "npm", "run", "build-container" ]
