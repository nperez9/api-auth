import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import apiRoutes from './src/api.routes'
import { errorGenericMiddleware } from './src/middlewares';

const app = express();

mongoose.connect(
  process.env.DB_CONNECTION as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.info('conected to DB'),
);

app.use(json());

app.use('/api', apiRoutes);

app.use(errorGenericMiddleware);

app.listen(3000, () => console.info('Server listening at 3000'));
