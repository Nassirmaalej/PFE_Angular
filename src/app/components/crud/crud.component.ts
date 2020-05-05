import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegleService } from '../Services/regle.service';
import { Observable } from 'rxjs';
import { Regle } from '../Services/regle';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
regle: Regle = new Regle();
  submitted = false;
  clickedEvent=false;
  closeResult: string;
  constructor(private regleService: RegleService,private modalService: NgbModal,
    private router: Router) {}
    dtOptions: any = {};

  ngOnInit() {

    this.clickedEvent = true;
    this.regleService.getregleList().subscribe(data => {
    this.regle = data
      console.log(this.regle)
    });
    console.log('geting data ...');

    this.regle=this.regleService.getter()
    console.log(this.regle)
    
   
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

    
  

  deleteregle(regle) {
    this.regleService.deleteregle(regle)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/crud']);

        },
        error => console.log(error));

  }

  updateregle(regle) {
    this.regleService.setter(regle);
    this.router.navigate(['/edit']);

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
