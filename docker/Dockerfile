FROM ubuntu:latest

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl \
        apt-utils

# RUN cd ~
# RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -


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

RUN rm -rf ./app/node_modules

RUN npm cache clean
RUN npm install
RUN npm rebuild node-sass


CMD npm run start