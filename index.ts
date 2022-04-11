import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

dotenv.config();

import './data/models';

import apiRouter from './api/routes';

const server = express();
const PORT = process.env.PORT || 8081;

const middleware = [
  morgan('combined'),
  bodyParser.urlencoded({ extended: true }),
  apiRouter,
];

server.use(middleware);

server.listen(PORT, () => {
  console.log(`[server] Server listening on port ${ PORT }...`);
});