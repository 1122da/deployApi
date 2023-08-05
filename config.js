const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyC-w-8kIcAXsq6GujJc83dk_IHsu4ZnB-o",
  authDomain: "foodapp-6efd1.firebaseapp.com",
  databaseURL: "https://foodapp-6efd1-default-rtdb.firebaseio.com",
  projectId: "foodapp-6efd1",
  storageBucket: "foodapp-6efd1.appspot.com",
  messagingSenderId: "993230065303",
  appId: "1:993230065303:web:633a3d26a5f4cb2fcd63d2",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
const Category = db.collection("categories");
const Dishes = db.collection("dishes");
const Orders = db.collection("orders");
module.exports = { User, Category, Dishes, Orders };
