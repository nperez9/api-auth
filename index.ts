import express, { json } from 'express';
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./src/utils/swagger');

const authRouter = require('./src/router/auth');

dotenv.config();

const app = express();

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.info('conected to DB'),
);

app.use(json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use('/api', authRouter);

app.listen(3000, () => console.info('Server listening at 3000'));
