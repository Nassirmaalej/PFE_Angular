import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { rule } from 'app/components/Services/rule';
import { RuleService } from 'app/components/Services/rule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'app/login3/auth.service';
import { AuthentificationService } from './AuthentificationService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   ngOnInit(): void {
  }
    rules: Array<any>;
    rule: Observable<rule[]>;
    connect: Observable<rule[]>;
    clickedEvent = false;
    data : Date = new Date();
    focus;
    focus1;
    username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  
    constructor(private ruleService: RuleService,private route: ActivatedRoute, private authenticationService: AuthenticationService ,
      private router: Router,private loginservice: AuthentificationService
      ) { }

 
      handleLogin() {
        this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
          this.invalidLogin = false;
          this.loginSuccess = true;
          this.successMessage = 'Login Successful.';
          if (this.loginservice.authenticate(this.username, this.password)==0
          ) {
            this.router.navigate(['/crudutilisateur'])
            this.invalidLogin = false
          }
          else if (this.loginservice.authenticate(this.username, this.password)==1
          ) {
            this.router.navigate(['/rule'])
            this.invalidLogin = false
          } else
          this.router.navigate(['/rule'])
            this.invalidLogin = true
        }, () => {
          this.invalidLogin = true;
          this.loginSuccess = false;
        });      
      }

      checkLogin() {
        
      }

      handleLogin1() {
        this.username === "b" ;
         this.password === "b";

        this.authenticationService.authenticationService("a", "a").subscribe((result)=> {
          this.invalidLogin = false;
          this.loginSuccess = true;
          this.successMessage = 'Login Successful.';
          this.router.navigate(['/addutilisateur1'])

        }, () => {
          this.invalidLogin = true;
          this.loginSuccess = false;
        });      
      }
 
}
