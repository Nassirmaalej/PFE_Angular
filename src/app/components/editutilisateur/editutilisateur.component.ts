import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Services/utilisateur';
import { UtilisateurService } from '../Services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editutilisateur',
  templateUrl: './editutilisateur.component.html',
  styleUrls: ['./editutilisateur.component.css']
})
export class EditutilisateurComponent implements OnInit {

  
  utilisateur: Utilisateur = new Utilisateur();
  submitted = false;
  constructor( private regleService: UtilisateurService , private router: Router ) { }

  ngOnInit(): void {

    this.utilisateur=this.regleService.getter()
    console.log(this.utilisateur)

  }


  newRegle(): void {
    this.submitted = false;
    this.utilisateur = new Utilisateur();
  }

  save() {
    this.regleService.createuser(this.utilisateur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.utilisateur = new Utilisateur();
    this.router.navigate(['/crudutilisateur']);

    
  }

  onSubmit() {
    this.save();    
  }

}
