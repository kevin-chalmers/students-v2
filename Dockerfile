# Base image to use
FROM node:latest

# Create application directory
WORKDIR /usr/src/app

# Install application dependancies
# Copy across project configuration information
COPY package*.json ./

# Ask npm to install the dependencies
RUN npm install

# Copy across all our files
# Copy from current local directory to image working directory
COPY . .

# Expose our application port
EXPOSE 3000

# On start, run the application using npm
ENTRYPOINT [ "npm", "start" ]