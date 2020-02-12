FROM node:10.18.0-alpine3.11

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install --production

# Copying source files
COPY . .

RUN npm i @next/bundle-analyzer -g
# Building app
RUN npm run build --production

# Running the app
CMD [ "npm", "start" ]