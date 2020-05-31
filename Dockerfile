FROM node:10-alpine

ARG NODE_ENV=${NODE_ENV:-development}
# Create app directory
WORKDIR /usr/src/api-auth

COPY . .

# Necesary to build bcrypt
RUN apk --no-cache add --virtual builds-deps build-base python

RUN npm install

EXPOSE 8080

CMD npm start
