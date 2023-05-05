FROM node:18.16.0-alpine3.16

ENV PORT_NUMBER=3001

EXPOSE 3001:3001

RUN mkdir /opt/backend

COPY package.json /opt/backend/package.json
COPY package-lock.json /opt/backend/package-lock.json
COPY src/ /opt/backend/src/
COPY node_modules/ /opt/backend/node_modules/

WORKDIR /opt/backend

CMD ["npm", "run", "app"]
