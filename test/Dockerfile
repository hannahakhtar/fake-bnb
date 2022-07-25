# define base image - will pull the image from docker hub which will have node.js and other tools pre-installed so we can run npm i and npm build commands
FROM node:16-alpine

# once base image is created, create new folder in its file system
# RUN allows you to execute any shell commands that you want

RUN mkdir -p /usr/app

# this file will be used to store our current src code - working directory (which was created above)
WORKDIR /usr/app

# the two dots represents the path we want to copy from and the path to copy to
# this is where the .dockerignore comes into play because it makes sure .next and node modules aren't copied
COPY ./ ./

# will install all dependencies from package.json
RUN npm install

# in the file system of the image, the below will create the .next folder that we can see locally so it is production ready
RUN npm run build

# define port that this container will listen to
EXPOSE 3000

# define entry point for any containers using this entry point
CMD ["npm", "dev"]


# ! for linking FE and BE: https://medium.com/bb-tutorials-and-thoughts/next-js-local-development-with-docker-compose-7b1954292a1f
