# ---------- Stage 1: Build ----------
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files first (better caching)
COPY package.json package-lock.json ./

RUN npm install

# Copy rest of the source
COPY . .

# Build the React app
RUN npm run build


# ---------- Stage 2: Runtime ----------
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
