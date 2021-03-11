import admin from 'firebase-admin';
import { env, Env } from '../../env';

const serviceAccount = require('./firebase-config.json');

admin.initializeApp({
  credential: admin.credential.cert(<admin.ServiceAccount>serviceAccount),
  databaseURL: (<Env>env).firebase.url,
});

export const db = admin.database();
