import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Prediction} from './prediction';
@Injectable({
  providedIn: 'root'
})


export class PredictionService {
 
  private  predict: Prediction ;

  private baseUrl = 'http://127.0.0.1:12345/predict';






  constructor(private http: HttpClient) { }

}
