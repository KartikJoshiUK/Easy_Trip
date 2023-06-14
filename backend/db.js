const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get a Firestore reference
const db = admin.firestore();
module.exports = db;
