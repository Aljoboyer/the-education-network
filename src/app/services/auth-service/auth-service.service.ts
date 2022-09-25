import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {signOut ,signInWithPopup, GoogleAuthProvider ,onAuthStateChanged, signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, updateProfile, User, Auth } from "firebase/auth";
import InitializationApp from "../../FirebaseSetup/FirebaseInit";
import { Observable, Subject } from 'rxjs';
import { ApiService } from '../apiService/api.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';

InitializationApp();

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
 
  auth: Auth = getAuth();
  user: any = {};
  private subject = new Subject<any>();

  constructor(private router: Router, private API: ApiService, private http: HttpClient) { }

  RegisterHandler(email: string, password: string, name: string, phone: string){

    createUserWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        this.http.post(this.API.USER_API, {email, password, name, phone}, {'headers': this.API.headers}).subscribe((datas: any) => {
          console.log('datas',)
        })
        this.router.navigateByUrl('/')
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

  GetLoginUser(){
    onAuthStateChanged(this.auth, (user: any) => {
      if (user) {
        const uid = user.uid;
        this.subject.next(user)
      } else {

      }
    });
  }
  getUser(): Observable<any>{
    return this.subject.asObservable()
  }
  logOut(){
    signOut(this.auth).then(() => {
      this.subject.next({})
      this.router.navigateByUrl('/')
    }).catch((error) => {
      // An error happened.
    });
  }
} 
