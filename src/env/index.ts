import * as dotenv from 'dotenv';
import * as path from 'path';

import { getOsEnv, normalizePort } from './utils';

dotenv.config({
  path: path.join(
    process.cwd(),
    `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`
  ),
});

export const env = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  port: normalizePort(process.env.PORT || getOsEnv('APP_PORT')),
  firebase: {
    url: getOsEnv('FIREBASE_URL'),
  },
};

export * from './type';
