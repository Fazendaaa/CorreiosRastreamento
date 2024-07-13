FROM node:v22.3.0 as builder

COPY package.json .

RUN [ "npm", "install"]

COPY src .

RUN [ "npm", "run", "build" ]

FROM node:v22.3.0 as tester

RUN [ "npm", "test" ]

FROM node:v22.3.0 as api-builder

COPY src .
COPY api .

RUN [ "npm", "run", "build-api" ]

FROM node:v22.3.0 as api-runnerer

RUN [ "npm", "run", "server" ]
