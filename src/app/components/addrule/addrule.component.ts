import { Component, OnInit } from '@angular/core';
import { Regle } from '../Services/regle';
import { RegleService } from '../Services/regle.service';

@Component({
  selector: 'app-addrule',
  templateUrl: './addrule.component.html',
  styleUrls: ['./addrule.component.css']
})
export class AddruleComponent implements OnInit {
  regle: Regle = new Regle();
  submitted = false;
  constructor( private regleService: RegleService ) { }

  ngOnInit(): void {

    this.regle=this.regleService.getter()
    console.log(this.regle)

  }


  newRegle(): void {
    this.submitted = false;
    this.regle = new Regle();
  }

  save() {
    this.regleService.createregle(this.regle)
      .subscribe(data => console.log(data), error => console.log(error));
    this.regle = new Regle();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }



  }















