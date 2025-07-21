FROM node:18-alpine

# Set working directory in container
WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY . .

RUN npm install

# Expose port 3000
EXPOSE 3000



CMD ["npm", "run", "dev"]