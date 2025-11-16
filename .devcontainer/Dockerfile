FROM node:18-bullseye

# Create app directory
WORKDIR /workspace

# Install dependencies first (only package manifests), then copy the rest
COPY package*.json ./
RUN npm ci --legacy-peer-deps --no-audit --progress=false

# Copy application files
COPY . .

# Expose Next.js default port
EXPOSE 3000

# Use a non-root user if available
ARG USERNAME=node
USER ${USERNAME}

# Default command for development
CMD ["npm", "run", "dev", "--", "--host"]
