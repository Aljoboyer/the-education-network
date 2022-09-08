import { Injectable } from '@angular/core';
import {signOut ,signInWithPopup, GoogleAuthProvider ,onAuthStateChanged, signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, updateProfile, User, Auth } from "firebase/auth";
import InitializationApp from "../../FirebaseSetup/FirebaseInit";

InitializationApp();

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
 
  auth: Auth = getAuth();

  constructor() { }

  RegisterHandler(email: string, password: string, name: string,){
    console.log('click')
    createUserWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        // setUser(user)
        //saving user to database
        // SaveUser(email, name)
        console.log('dukse')

    })
    .catch((error) => {
        console.log('from register user', error.message);
        // setRegError(error.message)
    }).finally(() => {
      // setIsloading(false)
    });
  }

}
