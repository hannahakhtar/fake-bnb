# define base image - will pull the image from docker hub which will have node.js and other tools pre-installed so we can run npm i and npm build commands
FROM node:16-alpine

# once base image is created, create new folder in its file system
# RUN allows you to execute any shell commands that you want

RUN mkdir -p /usr/app

# this file will be used to store our current src code - working directory (which was created above)
WORKDIR /usr/app

# Copy package.json and package-lock.json to the /app working directory
COPY package*.json /usr/app

# will install all dependencies from package.json
RUN npm install

# the two dots represents the path we want to copy from and the path to copy to
# this is where the .dockerignore comes into play because it makes sure .next and node modules aren't copied
COPY . /usr/app

# in the file system of the image, the below will create the .next folder that we can see locally so it is production ready
# not needed for dev Dockerfile
# RUN npm run build

# define port that this container will listen to
EXPOSE 3000
EXPOSE 49153

# define entry point for any containers using this entry point
CMD ["npm", "run", "dev"]