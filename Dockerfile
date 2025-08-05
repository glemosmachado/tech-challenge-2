# Use official Node.js LTS version as base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy dependency files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all other application files
COPY . .

# Expose the application's port
EXPOSE 3000

# Define the command to run the application
CMD ["node", "app.js"]
