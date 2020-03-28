import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { rule } from 'app/components/Services/rule';
import { RuleService } from 'app/components/Services/rule.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    rules: Array<any>;
    rule: Observable<rule[]>;
    connect: Observable<rule[]>;
    clickedEvent = false;
    data : Date = new Date();
    focus;
    focus1;

    constructor(private ruleService: RuleService,) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');



        
    }
    getconnect(){
        this.clickedEvent = true;
        this.ruleService.getconnect().subscribe(data => {
        this.connect = data
        
          console.log(this.connect)
        });
        console.log('connected');
        }
      
      
      

}
