import {auth, createUserWithEmailAndPassword } from "./firebase.config.js";

let signupbtn = document.getElementById("btn");
signupbtn.addEventListener("click",signUp);


function signUp() {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((e)=> {
    // localStorage.setItem("user",e.user.uid)
    console.log(e);
    window.location.href = "/home.html"
    })
    .catch((er)=> alert(er))
    };
    