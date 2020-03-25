import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private baseUrl = 'http://localhost:8081/regle/red';
  private baseUrl1 = 'http://localhost:8081/regle/listrule';
  private baseUrlx='http://localhost:8081/regle/statx';
  private baseUrly='http://localhost:8081/regle/staty';
  private baseUrlz='http://localhost:8081/regle/statz';
  
  private baseUrljan='http://localhost:8081/regle/statjan';
  private baseUrlfev='http://localhost:8081/regle/statfev';
  private baseUrlmar='http://localhost:8081/regle/statmar';
  private baseUrlavr='http://localhost:8081/regle/statavr';
  private baseUrlmai='http://localhost:8081/regle/statmai';
  private baseUrljui='http://localhost:8081/regle/statjui';
  private baseUrljul='http://localhost:8081/regle/statjul';
  private baseUrlout='http://localhost:8081/regle/statout';
  private baseUrlsep='http://localhost:8081/regle/statsep';
  


  private baseUrlwhritejan='http://localhost:8081/regle/statwhritejan';
  private baseUrlwhritefev='http://localhost:8081/regle/statwhritefev';
  private baseUrlwhritemar='http://localhost:8081/regle/statwhritemar';
  private baseUrlwhriteavr='http://localhost:8081/regle/statwhriteavr';
  private baseUrlwhritemai='http://localhost:8081/regle/statwhritemai';
  private baseUrlwhritejui='http://localhost:8081/regle/statwhritejui';
  private baseUrlwhritejul='http://localhost:8081/regle/statwhritejul';
  private baseUrlwhriteout='http://localhost:8081/regle/statwhriteout';
  private baseUrlwhritesep='http://localhost:8081/regle/statwhritesep';



  private headers = new Headers({'Content-Type':'application/json'});
  
  constructor(private http: HttpClient) { }

  getevent(): Observable<any> {
    return this.http.get(this.baseUrl1);
   
  }
  
  getconnect(): Observable<any> {
    return this.http.get(this.baseUrl);
   
  }

  getx() : Observable<any> 
  {return this.http.get(this.baseUrlx);}

  gety() : Observable<any> 
  {return this.http.get(this.baseUrly);}

  getz() : Observable<any> 
  {return this.http.get(this.baseUrlz);}

  
  getjan() : Observable<any> 
  {return this.http.get(this.baseUrljan);}

  getfev() : Observable<any> 
  {return this.http.get(this.baseUrlfev);}
  getmar() : Observable<any> 
  {return this.http.get(this.baseUrlmar);}
  getavr() : Observable<any> 
  {return this.http.get(this.baseUrlavr);}
  getmai() : Observable<any> 
  {return this.http.get(this.baseUrlmai);}
  getjui() : Observable<any> 
  {return this.http.get(this.baseUrljui);}
  getjul() : Observable<any> 
  {return this.http.get(this.baseUrljul);}
  getout() : Observable<any> 
  {return this.http.get(this.baseUrlout);}

  getsep() : Observable<any> 
  {return this.http.get(this.baseUrlsep);}



  getwhritejan() : Observable<any> 
  {return this.http.get(this.baseUrlwhritejan);}

  getwhritefev() : Observable<any> 
  {return this.http.get(this.baseUrlwhritefev);}
  getwhritemar() : Observable<any> 
  {return this.http.get(this.baseUrlwhritemar);}
  getwhriteavr() : Observable<any> 
  {return this.http.get(this.baseUrlwhriteavr);}
  getwhritemai() : Observable<any> 
  {return this.http.get(this.baseUrlwhritemai);}
  getwhritejui() : Observable<any> 
  {return this.http.get(this.baseUrlwhritejui);}
  getwhritejul() : Observable<any> 
  {return this.http.get(this.baseUrlwhritejul);}
  getwhriteout() : Observable<any> 
  {return this.http.get(this.baseUrlwhriteout);}

  getwhritesep() : Observable<any> 
  {return this.http.get(this.baseUrlwhritesep);}














}
