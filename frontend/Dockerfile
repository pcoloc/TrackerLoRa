### STAGE 1:BUILD ###
# Defining a node image to be used as giving it an alias of "build"
# Which version of Node image to use depends on project dependencies
# This is needed to build and compile our code
# while generating the docker image
FROM node:16 AS build
# Create a Virtual directory inside the docker image
WORKDIR /dist/src/app
# Copy files to virtual directory
# COPY package.json package-lock.json ./
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .
#RUN npm install --location=global npm
RUN npm install --legacy-peer-deps
#RUN npm install
RUN npm run build --omit=dev --deploy-url=https://tracker.lopezcarrillo.com
#COPY /dist/frontend/index.html /dist/frontend/404.html
#RUN  tar -zcvf trackerlora.tar.gz /dist/frontend/
### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder
COPY --from=build /dist/src/app/dist/frontend/index.html /dist/src/app/dist/frontend/404.html
#RUN  tar -zcvf trackerlora.tar.gz /dist/src/app/dist/frontend/
#COPY --from=build /dist/src/app/trackerlora.tar.gz /usr/share/nginx/html
COPY --from=build /dist/src/app/dist/frontend /usr/share/nginx/html
# Exposing a port, here it means that inside the container
# the app will be using Port 80 while running

HEALTHCHECK CMD wget --spider --tries=1 --no-verbose http://localhost:80 || exit 1

EXPOSE 80
