const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fs = require('fs');
const path = require('path');
const JsonToTS = require('json-to-ts');

const fileName = 'user';
const typeName = fileName.replace(/^./, fileName[0].toUpperCase());
const footer = `export default ${typeName};`;

const file = fs.createWriteStream(path.join(__dirname, '..', 'types', `${fileName}.d.ts`));

file.on('open', async () => {
  const response = await fetch('http:localhost:3000/api/user').then((response) => response.json());

  JsonToTS(response, { rootName: typeName }).forEach((interface) => file.write(interface + '\n'));
  file.write(footer);
});
