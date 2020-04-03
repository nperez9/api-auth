import * as express from 'express';
import mongoose from 'mongoose';
const authRouter = require('./router/auth');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.info('conected to DB'),
);

app.use(express.json());

app.use('/api/user', authRouter);

app.listen(3000, () => console.info('Server listening at 3000'));
