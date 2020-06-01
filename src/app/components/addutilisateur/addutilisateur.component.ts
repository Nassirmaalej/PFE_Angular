import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Services/utilisateur';
import { UtilisateurService } from '../Services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addutilisateur',
  templateUrl: './addutilisateur.component.html',
  styleUrls: ['./addutilisateur.component.css']
})
export class AddutilisateurComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  submitted = false;
  constructor( private utilisateurService: UtilisateurService , private router: Router ) { }

  ngOnInit(): void {

    this.utilisateur=this.utilisateurService.getter()
    console.log(this.utilisateur)
    this.utilisateur = new Utilisateur();

  }


  newUser(): void {
    this.submitted = false;
    this.utilisateur = new Utilisateur();
  }

  save() {
    this.utilisateurService.createuser(this.utilisateur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.utilisateur = new Utilisateur();
   

    this.router.navigate(['/crudutilisateur']);

    console.log(this.utilisateur)  
  }

  onSubmit() {
    this.save();  
    console.log(this.utilisateur)  ;

  }

}
