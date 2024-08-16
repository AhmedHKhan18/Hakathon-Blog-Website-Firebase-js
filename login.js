import { auth, signInWithEmailAndPassword } from "./firebase.config.js";


let loginbtn = document.getElementById("loginbtn");
loginbtn.addEventListener("click", Login);


function Login() {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((e)=> {
    // localStorage.setItem("user",e.user.uid)
    // console.log(e);
    window.location.href = "/home.html"
    })
    .catch((er)=> alert(er))
    };
