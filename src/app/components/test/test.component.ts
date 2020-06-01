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
  Assistancecommerciale: any;
  Activationweb: any;
  Assurancemobile: any;
  Desimlockage: any;

  blackliste:any;
  clientVIP: any;
  clientenrecouvrement: any;
  Parcoursstandardlangagenaturel: any;
  region1: any;
  region2: any;
  region3: any;
  region4: any;
  region5: any;
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



  this.clickedEvent = true;
  this.ruleService1.getblackliste().subscribe(data => {
  this.blackliste= data
  console.log('geting  (number of blackliste)...');
    console.log(this.blackliste)
  });



  this.clickedEvent = true;
  this.ruleService1.getclientVIP().subscribe(data => {
  this.clientVIP= data
  console.log('geting  (number of clientVIP)...');
    console.log(this.clientVIP)
  });



  this.clickedEvent = true;
  this.ruleService1.getclientenrecouvrement().subscribe(data => {
  this.clientenrecouvrement= data
  console.log('geting  (number of clientenrecouvrement)...');
    console.log(this.clientenrecouvrement)
  });



  this.clickedEvent = true;
  this.ruleService1.getParcoursstandardlangagenaturel().subscribe(data => {
  this.Parcoursstandardlangagenaturel= data
  console.log('geting  (number of Parcoursstandardlangagenaturel)...');
    console.log(this.Parcoursstandardlangagenaturel)
  });



  this.clickedEvent = true;
  this.ruleService1.getregion1().subscribe(data => {
  this.region1= data
  console.log('geting  (number of region1)...');
    console.log(this.region1)
  });

  this.clickedEvent = true;
  this.ruleService1.getregion2().subscribe(data => {
  this.region2= data
  console.log('geting  (number of region2)...');
    console.log(this.region2)
  });

  this.clickedEvent = true;
  this.ruleService1.getregion3().subscribe(data => {
  this.region3= data
  console.log('geting  (number of region3)...');
    console.log(this.region3)
  });

  this.clickedEvent = true;
  this.ruleService1.getregion4().subscribe(data => {
  this.region4= data
  console.log('geting  (number of region4)...');
    console.log(this.region4)
  });

  this.clickedEvent = true;
  this.ruleService1.getregion5().subscribe(data => {
  this.region5= data
  console.log('geting  (number of region5)...');
    console.log(this.region5)
  });




  this.clickedEvent = true;
  this.ruleService1.getAssistancecommerciale().subscribe(data => {
  this.Assistancecommerciale= data
  console.log('geting  (number of Assistancecommerciale)...');
    console.log(this.Assistancecommerciale)
  });


  this.clickedEvent = true;
  this.ruleService1.getActivationweb().subscribe(data => {
  this.Activationweb= data
  console.log('geting  (number of Activationweb)...');
    console.log(this.Activationweb)
  });


  this.clickedEvent = true;
  this.ruleService1.getAssurancemobile().subscribe(data => {
  this.Assurancemobile= data
  console.log('geting  (number of Assurancemobile)...');
    console.log(this.Assurancemobile)
  });


  this.clickedEvent = true;
  this.ruleService1.getDesimlockage().subscribe(data => {
  this.Desimlockage= data
  console.log('geting  (number of Desimlockage)...');
    console.log(this.Desimlockage)
  });


  this.clickedEvent = true;
  this.ruleService1.getPaiementfacture().subscribe(data => {
  this.Paiementfacture= data
  console.log('geting  (number of Paiementfacture)...');
    console.log(this.Paiementfacture)
  });


  this.clickedEvent = true;
  this.ruleService1.getInformationsurlaconsommation().subscribe(data => {
  this.Informationsurlaconsommation= data
  console.log('geting  (number of Informationsurlaconsommation)...');
    console.log(this.Informationsurlaconsommation)
  });


  this.clickedEvent = true;
  this.ruleService1.getChoixintermédairenonvalide().subscribe(data => {
  this.Choixintermédairenonvalide= data
  console.log('geting  (number of Choixintermédairenonvalide)...');
    console.log(this.Choixintermédairenonvalide)




 
  











    new Chart(document.getElementById("radar-chart"), {
      type: 'radar',
      data: {
        labels: ["Client blacklisté", "Client VIP  ", "Client en recouvrement", "Standard-langagenaturel"],
        datasets: [
          {
            label: "1950",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "#378DF9",
            pointBorderColor: "#378DF9",
            pointBackgroundColor: "378DF9",
            
            data: [this.blackliste,this.clientVIP,this.clientenrecouvrement,this.Parcoursstandardlangagenaturel]
            //data: [5,4,3,1]


          }, 
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Distribution in % of world population'
        }
      }
  });
  







    var ctx = document.getElementById('myChart')
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['Assistancecommerciale', 'Activationweb', 'Assurancemobile', 'Desimlockage', 'Paiementfacture', 'Informationsurlaconsommation', 'Choixintermédairenonvalide'],
            datasets: [{
                label: 'My First dataset',
                data: [this.Assistancecommerciale,this.Activationweb,this.Assurancemobile,this.Desimlockage,this.Paiementfacture,this.Informationsurlaconsommation,this.Choixintermédairenonvalide],
                //data: [1,5,7,0,4,3,15],

                backgroundColor: '#E8F0FA',
                borderColor: '#378DF9',
                hoverBackgroundColor:'rgb(255, 99, 132)',
                hoverBorderColor:'rgb(255, 99, 132)',
            }]
        },
    
        // Configuration options go here
        options: {}
    });







  });














 
  new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Nord-est",  "Centre-Nord ", "Centre-Sud ", "North-America","ILE DE FRANCE"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#89B3FA","#276CE4","#2A1DF9","#052C6D","#060246"],
          data: [2,3,5,10,5,0]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});


    

   
    
        
  

 }
  Choixintermédairenonvalide(Choixintermédairenonvalide: any) {
    throw new Error("Method not implemented.");
  }
  Informationsurlaconsommation(Informationsurlaconsommation: any) {
    throw new Error("Method not implemented.");
  }
  Paiementfacture(Paiementfacture: any) {
    throw new Error("Method not implemented.");
  }






}


