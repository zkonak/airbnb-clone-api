const express = require('express');
const router = require('./routers');

const server = express();
server.use(express.static('./src/assets'));

server.use(router);
server.listen(8000, () => {
  console.log('server is running');
});
