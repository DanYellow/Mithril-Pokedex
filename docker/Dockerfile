# If not exist docker will try to download it
FROM myubuntu:flowtype

RUN apt-get update && apt-get install -y nodejs npm ocaml libelf-dev

RUN ln -s --force /usr/bin/nodejs /usr/local/bin/node && ln -s --force /usr/bin/npm /usr/local/bin/npm

RUN npm install -g flow-bin

WORKDIR /app

CMD npm install && npm run start
