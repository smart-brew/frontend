FROM node:14 as builder
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY ./ ./
RUN yarn build

FROM httpd:2.4 as server
COPY --from=builder /usr/src/app/build /usr/local/apache2/htdocs/
EXPOSE 80:80
