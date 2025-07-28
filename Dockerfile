# Stage 1: Build Vite frontend
FROM node:18 AS frontend-builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Build backend
FROM node:18 AS backend-builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build:server

# Stage 3: Final image (backend + Nginx for frontend)
FROM node:18-slim

WORKDIR /app

# Copy compiled backend
COPY --from=backend-builder /app/dist /app/dist
COPY --from=backend-builder /app/.env /app/.env

# Copy frontend dist folder and nginx
COPY --from=frontend-builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Install nginx
RUN apt-get update && apt-get install -y nginx && apt-get clean

# Copy and set up nginx
RUN mkdir -p /var/run/nginx

# Start both backend and frontend using a small init process
RUN npm install -g concurrently

CMD concurrently "node /app/dist/server/index.js" "nginx -g 'daemon off;'"
