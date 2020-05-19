FROM node:latest as build-step
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build-step /app/dist/user-login-page /usr/share/nginx/html
