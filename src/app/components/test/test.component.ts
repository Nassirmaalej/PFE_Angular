import { Component, OnInit } from '@angular/core';
import {Chart} from 'Chart.js'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RuleService } from '../Services/rule.service';
import { rule } from '../Services/rule';


import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  
  constructor(private ruleService1: RuleService,   

    private router: Router) { }
  public isCollapsed = true;
  rules: Array<any>;
 

  clickedEvent = false;
  connect : any;

   


getx() {    

  var ctx = document.getElementById('horizontalBar')

  var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
 data: {
      datasets: [{
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 20, 30, 40, 50, 60, 70],
     
      }]
  },
  options : {
    scales: {
        xAxes: [{
            gridLines: {
                offsetGridLines: true
            }
        }]
    }
}
});
 

  

    var ctx = document.getElementById('myChart')
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                data: [0, 10, 5, 2, 20, 30, 45],

                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                hoverBackgroundColor:'rgb(255, 99, 132)',
                hoverBorderColor:'rgb(255, 99, 132)',
            }]
        },
    
        // Configuration options go here
        options: {}
    });


    var ctx = document.getElementById('myRadarChart')

    var myRadarChart = new Chart(ctx, {
      type: 'radar',
   
      data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
            data: [60, 10, 40, 22],
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor:'rgb(255, 99, 132)',
        }]
        
    },
      options :{
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    }
  });
    
        
  

 }






}


