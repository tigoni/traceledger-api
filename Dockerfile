FROM node:16-alpine

RUN mkdir -p /home/traceledger/api/node_modules && chown -R node:node /home/traceledger/api

# Create app directory
WORKDIR /home/traceledger/api

COPY package*.json ./ 

RUN npm install

USER node

COPY --chown=node:node  . ./

EXPOSE 3000

#run traceledger_api server when container starts
ENTRYPOINT ["node", "./src/Server.js"]