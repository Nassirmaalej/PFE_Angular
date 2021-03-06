import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { rule } from '../Services/rule';
import { Router, NavigationEnd } from '@angular/router';
import { RuleService } from "../Services/rule.service";
import * as XLSX from 'xlsx'; 

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
  rules: Array<any>;
  rule: Observable<rule[]>;
  connect: Observable<rule[]>;
  clickedEvent = false;
  navbar: any;
  element: any;
  renderer: any;
  location: any;

  constructor(private ruleService: RuleService,
    private router: Router) { }
  public isCollapsed = true;
public rule1=[];
  
  public data = [
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},];
    title = 'angulardatatables';
    dtOptions: any = {};
    private _router: Subscription;
  ngOnInit() {






    










    this.clickedEvent = true;
    this.ruleService.getevent().subscribe(data => {
    this.rule = data
      console.log(this.rule)
    });
    console.log('geting data ...');
  
  




    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
    };

  } ;


  getconnect(){
  this.clickedEvent = true;
  this.ruleService.getconnect().subscribe(data => {
  this.connect = data
  
    console.log(this.connect)
  });
  console.log('connected');
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


  async getevent() {
    this.clickedEvent = true;
    this.ruleService.getevent().subscribe(data => {
    this.rule = data
      console.log(this.rule)
    });
    console.log('geting data ...');
    await this.delay(3000);
    this.getevent();
  
  } 
  fileName= 'ExcelSheet.xlsx';  

  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    






    var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        if (window.outerWidth > 991) {
            window.document.children[0].scrollTop = 0;
        }else{
            window.document.activeElement.scrollTop = 0;
        }
        this.navbar.sidebarClose();

        this.renderer.listen('window', 'scroll', (event) => {
            const number = window.scrollY;
            var _location = this.location.path();
            _location = _location.split('/')[2];

            if (number > 150 || window.pageYOffset > 150) {
                navbar.classList.remove('navbar-transparent');
            } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
    });
   // JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)|| "null").forEach(authority => {
        //this.roles.push(authority.authority);














    var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        if (window.outerWidth > 991) {
            window.document.children[0].scrollTop = 0;
        }else{
            window.document.activeElement.scrollTop = 0;
        }
        this.navbar.sidebarClose();

        this.renderer.listen('window', 'scroll', (event) => {
            const number = window.scrollY;
            var _location = this.location.path();
            _location = _location.split('/')[2];

            if (number > 150 || window.pageYOffset > 150) {
                navbar.classList.remove('navbar-transparent');
            } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
    });














  }


}
