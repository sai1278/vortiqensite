# Stage 1: Build the React application with Vite
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package manifests first to leverage Docker layer caching
COPY package.json package-lock.json ./

# Install exact dependencies defined in package-lock.json
RUN npm ci

# Copy application source code
COPY . .

# Build production static bundle to /app/dist
RUN npm run build

# Stage 2: Serve static production assets with Nginx
FROM nginx:alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy Vite build output from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Configure SPA fallback routing so React Router / sub-routes load index.html
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
