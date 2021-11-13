

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBV5xvjksjmDETv8VRvRacmNo8quNwQaKI",
  authDomain: "signuppage-9a393.firebaseapp.com",
  databaseURL: "https://signuppage-9a393-default-rtdb.firebaseio.com",
  projectId: "signuppage-9a393",
  storageBucket: "signuppage-9a393.appspot.com",
  messagingSenderId: "1047205739932",
  appId: "1:1047205739932:web:8bec4d698d657595725c59",
  measurementId: "G-K2P67M0VS4"
};

document.getElementById ("btn").addEventListener ("click", signIn, false);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

function signIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    console.log(email,password)
    const promise =signInWithEmailAndPassword(auth,email,password);
    promise.catch(e => {alert(e)});
    promise.then( e => alert("login successfully"));
    // window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}