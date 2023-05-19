# Use the official Node.js 14 image as the base image
FROM node:16.10 AS build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build:single-spa:nagan-menu

# Use the official Nginx image as the base image for the production container
FROM nginx:latest

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built application to the container's default document root directory
COPY --from=build /app/dist/nagan-menu /usr/share/nginx/html


# Expose port 80 for incoming traffic
EXPOSE 80

# Start Nginx in the foreground when the container starts
CMD ["nginx", "-g", "daemon off;"]
