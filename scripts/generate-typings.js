const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fs = require('fs');
const path = require('path');
const JsonToTS = require('json-to-ts');

const responseToType = (fileName, apiUrl, apiOptions = {}) => {
  const typeName = fileName.replace(/^./, fileName[0].toUpperCase());
  const file = fs.createWriteStream(path.join(__dirname, '..', 'types', `${fileName}.d.ts`));

  file.on('open', async () => {
    const response = await fetch(apiUrl, apiOptions).then((response) =>
      response.json()
    );
    JsonToTS(response, { rootName: typeName }).forEach((interface) => file.write(interface + '\n'));
  });
};

responseToType('user', 'http:localhost:3000/api/user');
responseToType('todo', 'http:localhost:3000/api/todo');
