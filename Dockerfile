FROM node:8.11.2

RUN mkdir -p /usr/src/cleanstore

COPY dist/CleanStore /sr/src/cleanstore/dist/CleanStore
COPY ssl /ust/src/cleanstore/ssl

COPY authMiddleware.js /usr/src/cleanstore/
COPY serverdata.json /usr/src/cleanstore/
COPY server.js /usr/src/cleanstore/server.js
COPY deploy-package.json /usr/src/cleanstore/package.json

WORKDIR /usr/src/cleanstore

RUN npm install

EXPOSE 80

CMD ["node", "server.js"]