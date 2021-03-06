FROM node:10.18.0-alpine3.11

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install --production

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]

# To publish this docker file
# -----------------------------
# All in one cmd: docker build -t adamgaltrey/website:dev . ; docker tag adamgaltrey/website:dev adamgaltrey/website:dev ; docker push adamgaltrey/website:dev
# -----------------------------