import admin from 'firebase-admin';
import { env, Env } from '../../env';

const serviceAccount = require('./firebase-config.json');

const { firebase, isTest } = <Env>env;

if (!isTest) {
  admin.initializeApp({
    credential: admin.credential.cert(<admin.ServiceAccount>serviceAccount),
    databaseURL: firebase.url,
  });
} else {
  admin.initializeApp({
    databaseURL: 'https://fake-database.firebaseio.com/',
  });
}

export const db = admin.database();
