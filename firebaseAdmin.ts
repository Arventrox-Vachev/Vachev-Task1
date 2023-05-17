const admin = require("firebase-admin");

const serviceAccount = require("./secrets.json");

export const verifyToken = token => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }

  return admin
    .auth()
    .verifyToken(token)
    .catch(err => {
      throw err;
    });
};
