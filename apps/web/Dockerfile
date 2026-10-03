# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root and web package configs
COPY package*.json ./
COPY apps/web/package*.json ./apps/web/

WORKDIR /app/apps/web
RUN npm install

# Copy source code and build
COPY apps/web/ ./
RUN npm run build

# Production Stage
FROM nginx:alpine

COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
