 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "a" && password === "a") {
      sessionStorage.setItem('username', username)
      return 0;
    } 
   else if (username === "b" && password === "b") {
      sessionStorage.setItem('username', username)
      return 1;
    }
    
    else {
      return 2;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
