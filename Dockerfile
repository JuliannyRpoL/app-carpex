FROM node:14.17.3-alpine3.14 AS my-app-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=my-app-build /app/dist/app-carpex /usr/share/nginx/html
EXPOSE 80