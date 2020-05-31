import { format, loggers, transports } from 'winston';
import WinstonDailyRotateFile from 'winston-daily-rotate-file';

const logFormat = format.combine(
  format.colorize(),
  format.json(),
  format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss.ss' }),
  format.printf((log) => `${log.timestamp} - ${log.level} ${log.message}`),
);

loggers.add('123Logger', {
  format: logFormat,
  transports: [
    new WinstonDailyRotateFile({
      filename: 'logs/log-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'info',
      maxSize: process.env.LOG_MAX_SIZE,
      maxFiles: process.env.LOG_MAX_FILES,
    }),
    new transports.Console({
      level: 'info',
    }),
  ],
});

const logger = loggers.get('123Logger');
export default logger;
