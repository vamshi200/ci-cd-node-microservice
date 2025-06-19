FROM node:20
WORKDIR /usr/src/app
COPY app/index.js ./index.js
RUN npm install express
EXPOSE 3000
CMD ["node", "index.js"]
