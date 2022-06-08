const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../serviceAccountKey.json');

const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);


const User = db.collection("Users");
const admin = db.collection("Admins");
 const Otp =  db.collection("Otps");
module.exports = {
  User:User,
  Otp:Otp,
  Admin:admin
}





