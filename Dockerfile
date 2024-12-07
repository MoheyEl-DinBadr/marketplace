# Use an official Node runtime as a parent image
    FROM node:14

    # Set the working directory in the container
    WORKDIR /usr/src/app

    # Copy package.json and pnpm-lock.yaml
    COPY package*.json ./

    # Install any needed packages specified in package.json
    RUN pnpm install --prod

    # Bundle app source inside Docker image
    COPY . .

    # Build the application
    RUN pnpm run build

    # Expose the port the app runs on
    EXPOSE 3000

    # Command to run the application
    CMD ["pnpm", "run", "serve"]
