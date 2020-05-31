const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRouter = require('./router/auth');
const healthRouter = require('./router/health');
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
app.use('/health', healthRouter);

app.listen(3000, () => console.info('Server listening at 3000'));
