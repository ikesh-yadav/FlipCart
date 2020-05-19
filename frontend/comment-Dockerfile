FROM node:latest as build-step
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build-step /app/dist/flipcart-frontend /usr/share/nginx/html
