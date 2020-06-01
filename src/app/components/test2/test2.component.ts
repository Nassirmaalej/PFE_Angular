import { Component, OnInit } from '@angular/core';
import { Prediction } from '../Services/prediction';
import { Router } from '@angular/router';
import { PredictionService } from '../Services/prediction.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component   {

 


  clickedEvent = false;
  connect: any;
  submitted: boolean;
  private baseUrl = 'http://127.0.0.1:12345/predict';
  private baseUrl1 = 'http://localhost:8081/client';

  predict1:Prediction;
  result: string;
  predict: Prediction;
  closeResult: string;
  

    constructor(private predictionservice: PredictionService,private http: HttpClient,private modalService: NgbModal,
    private router: Router) { }

    ngOnInit(): void {
     this.predict= new Prediction()
    }








    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Saved with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  
      











    getClient(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl1}/${id}`);
    }


    getData(id)  
    {  
        this.getClient(id).subscribe(  data => {
          this.predict = data
          
            console.log(this.predict)
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
      console.log("predict",this.predict)
console.log(this.predict.anciente)

      this.http.post(this.baseUrl,[
    
        {"Site":this.predict.site , "Anciente": this.predict.anciente, "Age": this.predict.age}
      
    ])
      .subscribe(data => { 

        this.result = JSON.stringify(data);
          console.log(this.result)
        });


      
    }
  
    onSubmit() {
      this.save();    


    }


  private toggleText: string = "Hide";
  private show: boolean = false;

  public onToggle(): void {
      this.show = !this.show;
      this.toggleText = this.show ? "Hidе" : "Show";
  }

}
