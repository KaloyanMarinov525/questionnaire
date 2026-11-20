# syntax=docker/dockerfile:1

# ---- Build the static site (glibc image, same as the CI runner, so native deps match the lockfile) ----
FROM node:24-slim AS build
WORKDIR /app
# Skip the husky git hooks (`prepare` script): there is no .git inside the image.
ENV HUSKY=0
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# ---- Serve it with nginx ----
FROM nginx:alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
