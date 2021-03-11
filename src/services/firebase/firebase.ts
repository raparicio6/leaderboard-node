import firebase from "firebase-admin";

import serviceAccount from "./firebase-config.json";
import { env, Env } from "../../env";

firebase.initializeApp({
  credential: firebase.credential.cert(<firebase.ServiceAccount>serviceAccount),
  databaseURL: (<Env>env).firebase.url,
});

export const db = firebase.database();
