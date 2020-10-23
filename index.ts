import dotenv from 'dotenv';
dotenv.config();

import express, { json } from 'express';
import { connectToMongo } from './src/database/conecction';
// import swaggerUi from 'swagger-ui-express';
// import swaggerConfig from './src/utils/swagger';

import apiRoutes from './src/api.routes'

connectToMongo();

const app = express();

app.use(json());

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use('/api', apiRoutes);

app.listen(3000, () => console.info('Server listening at 3000'));
