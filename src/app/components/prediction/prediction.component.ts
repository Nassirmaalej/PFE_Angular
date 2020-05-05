import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../Services/prediction.service';
import { Router } from '@angular/router';
import { Prediction } from '../Services/prediction';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {


  clickedEvent = false;
  connect: any;
  submitted: boolean;
  private baseUrl = 'http://127.0.0.1:12345/predict';
  private baseUrl1 = 'http://localhost:8081/client';

  predict: Prediction;
  result: string;

    constructor(private predictionservice: PredictionService,private http: HttpClient,
    private router: Router) { }

    ngOnInit(): void {

     
      this.predict = new Prediction();
 
    }

    getClient(id: number): Observable<Object> {
      return this.http.get(`${this.baseUrl1}/${id}`);
    }


    getData(id)  
    {  
        this.getClient(id).subscribe(  data => {
          this.connect = data
          
            console.log(this.connect)
          },  
          error => {  
            console.log("error while getting user Details");  
          }  
        );  
    }  









    newPredict(): void {
      this.submitted = false;
    }
    
    
    
    save() {
      console.log(this.predict)

      this.http.post(this.baseUrl,[this.predict])
        .subscribe(data => { 

          this.result = JSON.stringify(data);
            console.log(this.result)
          });
     
      
    }
  
    onSubmit() {
      this.save();    
     
    

    }
  
}
