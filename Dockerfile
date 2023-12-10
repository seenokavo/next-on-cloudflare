# specify a base image
FROM node:20

# specify the work directory
WORKDIR /app

# set environment variables
# ENV NODE_ENV=production PORT=3000

# copy package.json and package-lock.json to the work directory
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the files to the work directory
COPY . .

# expose the port the app runs on
EXPOSE 8788

# command to run the application
CMD [ "npm", "run", "dev-cf" ]
