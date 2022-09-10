import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {signOut ,signInWithPopup, GoogleAuthProvider ,onAuthStateChanged, signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, updateProfile, User, Auth } from "firebase/auth";
import InitializationApp from "../../FirebaseSetup/FirebaseInit";

InitializationApp();

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
 
  auth: Auth = getAuth();

  constructor(private router: Router) { }

  RegisterHandler(email: string, password: string, name: string,){

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

  LoginHandler(email: string, password: string){

    signInWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        this.router.navigateByUrl('/')

    })
    .catch((error) => {
        console.log(error.message)
    }).finally(() => console.log(false));
  }
}
