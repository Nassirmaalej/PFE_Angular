import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Utilisateur } from '../Services/utilisateur';
import { RegleService } from '../Services/regle.service';
import { UtilisateurService } from '../Services/utilisateur.service';

@Component({
  selector: 'app-crudutilisateur',
  templateUrl: './crudutilisateur.component.html',
  styleUrls: ['./crudutilisateur.component.css']
})
export class CrudutilisateurComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  submitted = false;
  clickedEvent=false;
  closeResult: string;
  constructor(private utilisateurService: UtilisateurService,private modalService: NgbModal,
    private router: Router) {}
    dtOptions: any = {};

  ngOnInit() {

    this.clickedEvent = true;
    this.utilisateurService.getuserList().subscribe(data => {
    this.utilisateur = data
      console.log(this.utilisateur)
    });
    console.log('geting data ...');

    this.utilisateur=this.utilisateurService.getter()
    console.log(this.utilisateur)
    
   
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

    
  

  deleteuser(utilisateur) {
    this.utilisateurService.deleteuser(utilisateur)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/crudutilisateur']);

        },
        error => console.log(error));

  }

  updateuser(utilisateur) {
    this.utilisateurService.setter(utilisateur);
    this.router.navigate(['/editutilisateur']);

  }

  


  newUser(): void {
    this.submitted = false;
    this.utilisateur = new Utilisateur();
  }

  save() {
    this.utilisateurService.createuser(this.utilisateur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.utilisateur = new Utilisateur();
    this.router.navigate(['/crud']);

    
  }

  onSubmit() {
    this.save();    
  }



}
