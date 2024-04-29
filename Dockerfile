# Use the official Node.js 18 image as base
FROM node:18.18.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port Next.js is running on
EXPOSE 3000

# Command to run the production server
CMD ["npm", "start"]
