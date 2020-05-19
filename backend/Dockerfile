FROM node:latest

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY . .

RUN npm install

EXPOSE 3000

ENV USERNAME="test"
ENV PASSWORD="test"
ENV MONGODB_URI="mongodb+srv://ikesh:ikesh@cluster0-kqrxx.gcp.mongodb.net/FlipCart?retryWrites=true&w=majority"
CMD ["npm","start"]