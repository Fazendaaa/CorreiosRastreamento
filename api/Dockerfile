FROM fazenda/correios-sdk AS builder

WORKDIR /usr/src/

COPY package.json .

RUN [ "npm", "install"]

WORKDIR /usr/src/

COPY src .

RUN [ "npm", "run", "build" ]

FROM fazenda/correios-sdk AS tester

WORKDIR /usr/src/

RUN [ "npm", "test" ]

FROM fazenda/correios-sdk AS api-runnerer

WORKDIR /usr/src/

COPY --from=builder /usr/src/dist dist
COPY --from=builder /usr/src/package.json package.json

ENTRYPOINT [ "npm", "run", "server" ]
