FROM ubuntu:latest

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends apt-utils \
        curl

RUN cd ~
RUN curl -sL https://deb.nodesource.com/setup_5.x | bash -


RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs \
        build-essential


RUN ln -s --force /usr/bin/nodejs /usr/local/bin/node \
    && ln -s --force /usr/bin/npm /usr/local/bin/npm

WORKDIR /app

COPY . /app/

RUN rm -rf ./app/node_modules


RUN npm cache clean
RUN npm install --no-optional
RUN npm rebuild node-sass
RUN ls
# RUN npm update --no-optional



CMD npm run server
