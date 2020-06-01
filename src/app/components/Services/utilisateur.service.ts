import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Utilisateur } from './utilisateur';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UtilisateurService {
  private baseUrl = 'http://localhost:8081/utilisateur/liste';
  private baseUrl1= 'http://localhost:8081/utilisateur/update';
  private baseUrldelte ='http://localhost:8081/utilisateur/delete'
  private baseUrladd='http://localhost:8081/utilisateur/add';
  constructor(private http: HttpClient) { }
  private  utilisateur: Utilisateur ;

  getter(){
    return this.utilisateur;
  }
 
  setter(utilisateur:Utilisateur){
    this.utilisateur=utilisateur;
  }
 
  getuserList(): Observable<any> {
     return this.http.get(this.baseUrl);
   }
 


  createuser(utilisateur: any): Observable<any> {
    return this.http.post(this.baseUrladd, utilisateur);
  }


  public deleteuser(utilisateur) {
    return this.http.delete(this.baseUrldelte + "/"+ utilisateur.id);
  }

  updateUser(utilisateur:Utilisateur){

    return this.http.put(this.baseUrl+'/update',utilisateur,{responseType:'text' as 'json'})//,JSON.stringify(personnel),this.options).map((response:Response)=>response.json())

  }
 
}
