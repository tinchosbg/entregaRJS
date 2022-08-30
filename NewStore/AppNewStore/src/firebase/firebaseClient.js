// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, firebase, getDocs, getFirestore, where, query } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGstq6s5QJDXAwSVJ1ojwvbYCUsRN_TCo",
  authDomain: "react-newstore.firebaseapp.com",
  projectId: "react-newstore",
  storageBucket: "react-newstore.appspot.com",
  messagingSenderId: "676544259786",
  appId: "1:676544259786:web:37bcdc1afc4f367d673633",
  measurementId: "G-0CS4W83BB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()
const productsCollection = collection(db, "productos")

export const getProducts = async () => {
  const querySnapshot = await getDocs(productsCollection);
  let products = []
  querySnapshot.forEach(doc => {
    console.log(doc.data());
    products.push(doc.data())

  })
  return products
}

export const getProductsByProp = async (prop, value) => {
  const q = query(productsCollection, where(prop, "==", value));
  const querySnapshot = await getDocs(q);
  let products = []
  querySnapshot.forEach((doc) => {
    products.push(doc.data())
  })
  return products
}


//export const getFirebase=()=>{return app}

