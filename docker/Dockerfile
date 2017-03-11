FROM ubuntu:latest

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        apt-utils curl

RUN cd ~
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -


RUN apt-get update \
    && apt-get install -y \
        nodejs \
        ocaml \
        libelf-dev \
        build-essential

RUN node -v

RUN ln -s --force /usr/bin/nodejs /usr/local/bin/node \
    && ln -s --force /usr/bin/npm /usr/local/bin/npm

WORKDIR /app

COPY . /app/

RUN rm -rf /app/node_modules/.babel-cli.DELETE

# RUN rm -rf node_modules
RUN npm cache clean
RUN npm install -g concurrently webpack http-server
RUN npm rebuild node-sass
# RUN npm install


CMD npm run start