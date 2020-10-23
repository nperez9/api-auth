import config from '../config';
import mongoose from 'mongoose';

export const connectToMongo = ():void => {
  console.info(config);
  mongoose.connect(
    config.mongoConectionString as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.info('conected to DB'),
  );
}