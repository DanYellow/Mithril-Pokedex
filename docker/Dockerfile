FROM ubuntu:latest

RUN apt-get update \
    && apt-get install -y \
        nodejs \
        npm \
        ocaml \
        libelf-dev

RUN node -v
RUN ln -s --force /usr/bin/nodejs /usr/local/bin/node \
    && ln -s --force /usr/bin/npm /usr/local/bin/npm

WORKDIR /app

COPY . /app/



RUN npm install -g flow-bin \
    && npm install \
    && npm rebuild node-sass

CMD npm run start