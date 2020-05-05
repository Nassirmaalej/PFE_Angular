import { Component, OnInit } from '@angular/core';
import { RegleService } from '../Services/regle.service';
import { Router } from '@angular/router';
import { Regle } from '../Services/regle';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  regle: Regle = new Regle();
  submitted = false;
  constructor( private regleService: RegleService , private router: Router ) { }

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
    this.router.navigate(['/crud']);

    
  }

  onSubmit() {
    this.save();    
  }

 


}
