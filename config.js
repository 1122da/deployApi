const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyBZVjcT1QFHyc89b4nbjcWCiXNaN5VuD_0",
  authDomain: "foodapp-1a522.firebaseapp.com",
  projectId: "foodapp-1a522",
  storageBucket: "foodapp-1a522.appspot.com",
  messagingSenderId: "1037711435770",
  appId: "1:1037711435770:web:a3df1b8e349e91bc30e643",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
const Category = db.collection("categories");
const Dishes = db.collection("dishes");
const Orders = db.collection("orders");
module.exports = { User, Category, Dishes, Orders };
