const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const cors = require('cors');
const router = require('./routers');

const server = express();

server.engine('ejs', ejs.renderFile);

server.set('views', '');

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static('./src/assets'));

server.use(router);
server.use(morgan('dev'));

server.listen(8000, () => {
  console.log('server is running: 8000');
});

server.use((req, res) => {
  res.status(404).send('Sorry cant find that!');
});
