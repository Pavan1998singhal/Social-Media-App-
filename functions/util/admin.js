const admin = require('firebase-admin');   // for connecting to firebase.
admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };