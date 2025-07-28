# Stage 1: Build frontend
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

# Final stage: Serve backend and frontend with Node
FROM node:18-slim

WORKDIR /app

# Copy backend output
COPY --from=backend-builder /app/dist /app/dist

# Copy frontend static files
COPY --from=frontend-builder /app/dist /app/client

# Optional: inject env (or use Kubernetes secrets)
ENV NODE_ENV=production

# Install dependencies (for running the backend)
COPY package*.json ./
RUN npm install --omit=dev

# Expose port
EXPOSE 4000

CMD ["node", "dist/server/index.js"]
