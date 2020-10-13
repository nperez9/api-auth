import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import swaggerUi from 'swagger-ui-express';
// import swaggerConfig from './src/utils/swagger';

import apiRoutes from './src/api.routes'

dotenv.config();

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

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use('/api', apiRoutes);

app.listen(3000, () => console.info('Server listening at 3000'));
