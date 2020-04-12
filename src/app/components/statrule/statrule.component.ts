import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RuleService } from '../Services/rule.service';
import { rule } from '../Services/rule';

import {Chart} from 'Chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stat',
  templateUrl: './statrule.component.html',
  styleUrls: ['./statrule.component.css']
})
export class StatruleComponent  {

  
  constructor(private ruleService1: RuleService,private httpClient: HttpClient,
    private router: Router) { }
  public isCollapsed = true;
  rules: Array<any>;

  
  clickedEvent = false;
  connect : any;
  url = 'http://localhost:8081/regle/listrule';  
  data: rule[];  
  date = [];  
  Run = [1,1,200,2,3,3,3,3,3,3,3,3,3];  
  Linechart = [];  
  myChart=[] ;
  calculRouting:Observable<rule[]>;
  calculParcours:Observable<rule[]>;
  calculpreCalcul:Observable<rule[]>;

  statpreCalculdelete:Observable<rule[]>;
  statroutingdelete:Observable<rule[]>;
  statParcoursdelete:Observable<rule[]>;

  statpreCalculupdate:Observable<rule[]>;
  statroutingupdate:Observable<rule[]>;
  statParcoursupdate:Observable<rule[]>;


  getx() {


    this.clickedEvent = true;
    this.ruleService1.getcalculRouting().subscribe(data => {
    this.calculRouting= data
    console.log('geting  (number of routing)...');
      console.log(this.calculRouting)
    });

    this.clickedEvent = true;
    this.ruleService1.getcalculParcours().subscribe(data => {
    this.calculParcours= data
    console.log('geting  (number of PARCOURS)...');
      console.log(this.calculParcours)  
    });

    this.clickedEvent = true;
    this.ruleService1.getcalculpreCalcul().subscribe(data => {
    this.calculpreCalcul= data
    console.log('geting  (number of preCalcul)...');
      console.log(this.calculParcours)  
    });







    this.clickedEvent = true;
    this.ruleService1.getstatpreCalculdelete().subscribe(data => {
    this.statpreCalculdelete= data
    console.log('geting  (number of preCalculdelete)...');
      console.log(this.statpreCalculdelete)
    });

    this.clickedEvent = true;
    this.ruleService1.getstatroutingdelete().subscribe(data => {
    this.statroutingdelete= data
    console.log('geting  (number of statroutingdelete)...');
      console.log(this.statroutingdelete)
    });
    this.clickedEvent = true;
    this.ruleService1.getstatParcoursdelete().subscribe(data => {
    this.statParcoursdelete= data
    console.log('geting  (number of statParcoursdelete)...');
      console.log(this.statParcoursdelete) 
    });



 



    this.clickedEvent = true;
    this.ruleService1.getstatpreCalculupdate().subscribe(data => {
    this.statpreCalculupdate= data
    console.log('geting  (number of statpreCalculupdate)...');
      console.log(this.statpreCalculupdate)
    });

    this.clickedEvent = true;
    this.ruleService1.getstatroutingupdate().subscribe(data => {
    this.statroutingdelete= data
    console.log('geting  (number of statroutingupdate)...');
      console.log(this.statroutingdelete)
    });
    this.clickedEvent = true;
    this.ruleService1.getstatParcoursupdate().subscribe(data => {
    this.statParcoursupdate= data
    console.log('geting  (number of statParcoursupdate)...');
      console.log(this.statParcoursupdate) 
    });





    this.httpClient.get(this.url).subscribe((result: rule[]) => {  
      result.forEach(x => {  
        this.date.push(x.date);  
      
      });  
      console.log(this.date);
      this.Linechart = new Chart('canvas', {  
        type: 'doughnut',  
        data: {  
         
        

          datasets: [  
            {  
              data: [this.calculRouting,this.calculParcours, this.calculpreCalcul] ,
              borderColor: '#3cb371',  
               backgroundColor: [  
                "#00FFEC",  
                "#17A7B6",  
                "#0BF57C",  
              
              ],   
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
  




    




    var ctx = document.getElementById("myBarChart");
    var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["PreCalcul", "Parcours", "Routing"],
        datasets: [{
          label: "number",
          backgroundColor: "#FB130C",
          borderColor: "rgba(2,117,216,1)",
          data: [this.statpreCalculdelete, this.statParcoursdelete,this.statroutingdelete]
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'month'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 25,
              maxTicksLimit: 5
            },
            gridLines: {
              display: true
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });
    



      
    var ctx = document.getElementById("myAreaChart1");
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
        datasets: [{
          label: "Sessions",
          lineTension: 0.3,
          backgroundColor: "#FA9CD3",
          borderColor: "#CB0075",
          pointRadius: 5,
          pointBackgroundColor: "#CB0075",
          pointBorderColor: "#CB0075",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(2,117,216,1)",
          pointHitRadius: 50,
          pointBorderWidth: 2,
          data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 40000,
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)",
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });







  }

 


  
///


  
  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  ngOnInit() {}

}
