FROM myubuntu:flowenv

RUN apt-get update \
    && apt-get install -y \
        nodejs \
        npm \
        ocaml \
        libelf-dev

RUN ln -s --force /usr/bin/nodejs /usr/local/bin/node \
    && ln -s --force /usr/bin/npm /usr/local/bin/npm

WORKDIR /app

# COPY /docker /app/

RUN mv /usr/local/lib/node_modules/flow-bin \
      /usr/local/lib/node_modules/.flow-bin.DELETE

RUN npm install -g flow-bin \
    && npm install \
    && npm rebuild node-sass
# RUN flow 

CMD npm run start
