 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import { getAuth } from  "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
 import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyD_DJ31W1pltuPZnktbrrRK8NsYGnfd6DI",
   authDomain: "todo-app-666ec.firebaseapp.com",
   projectId: "todo-app-666ec",
   storageBucket: "todo-app-666ec.appspot.com",
   messagingSenderId: "504665750147",
   appId: "1:504665750147:web:13ef32c9d63483bb4cf9b6"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

export {auth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword}



// onAuthStateChanged(auth, (user)=>{
//     console.log(user.uid);
//     if (user.uid && window.location.href.includes("/signup.html")) {
//     }else if(user.uid && window.location.href.includes("/index.html")){
//         window.location.href = "/home.html"
//     }
// })
