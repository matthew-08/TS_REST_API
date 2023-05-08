import pino from 'pino';
import dayjs from 'dayjs';
import {} from 'pino-pretty';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  base: {
    pid: false,
  },
  timestamp: () => `time: ${dayjs().format()}`,
});

export { logger };
