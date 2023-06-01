FROM node:16.15.0 as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx vite build

FROM nginx:latest
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
