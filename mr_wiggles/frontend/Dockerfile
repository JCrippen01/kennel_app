# Dockerfile for React (Vite)
FROM node:18-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
# Serve the build using a simple static server
CMD ["npx", "serve", "-s", "dist", "-l", "5000"]
