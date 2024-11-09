FROM node:lts

WORKDIR /usr/src

COPY package-lock.json package-lock.json
COPY package.json package.json

RUN [ "npm", "install", "--force" ]
RUN [ "npm", "ci", "--force" ]

COPY public public
COPY receitas receitas
COPY views views

COPY 404.html 404.html
COPY index.html index.html
COPY app.js app.js

EXPOSE 8080
