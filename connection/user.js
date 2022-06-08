const {initializeApp} = require("firebase/app");
const {getAuth} = require("firebase/auth");
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "test-project-77392.firebaseapp.com",
    projectId: "test-project-77392",
    storageBucket: "test-project-77392.appspot.com",
    messagingSenderId: "414185520846",
    appId: "1:414185520846:web:c644f8a2dce28321ac1a9f",
    measurementId: "G-ZWG9X6QWC2"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  
  module.exports= app;

  