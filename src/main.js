
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"
import { auth } from "./app/firebase.js";
import { loginCheck } from './app/loginChek.js';

import './app/singnupForm.js'
import './app/signinForm.js'
import './app/googlelogin.js'
import './app/otherslogin.js'

import './app/realtimeData.js'


import  './app/logout.js'

onAuthStateChanged(auth,async(user)=>
    {  
        loginCheck(user)
        /* if(user){
            loginChek(user)
        }else{

        } */
    })
console.log('hola mundo');