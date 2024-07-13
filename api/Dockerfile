FROM node:22.4.1 as builder

COPY package.json .

RUN [ "npm", "install"]

COPY src .

RUN [ "npm", "run", "build" ]

FROM node:22.4.1 as tester

RUN [ "npm", "test" ]

FROM node:22.4.1 as api-builder

COPY src .
COPY api .

RUN [ "npm", "run", "build-api" ]

FROM node:22.4.1 as api-runnerer

RUN [ "npm", "run", "server" ]
