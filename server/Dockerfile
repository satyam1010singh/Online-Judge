FROM node:18-alpine
RUN apk update && \
    apk upgrade && \
    apk add ca-certificates && \
    update-ca-certificates && \
    apk add --update coreutils && rm -rf /var/cache/apk/* && \
    apk add --update openjdk11 tzdata curl unzip bash && \
    apk add g++ && \
    apk add --no-cache nss && \
    rm -rf /var/cache/apk/*

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8004
CMD [ "node", "server.js" ]