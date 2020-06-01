import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';
import { RuleComponent } from './rule/rule.component';
import { StatComponent } from './stat/stat.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { LinechartComponent } from './linechart/linechart.component';
import { Login1Component } from './login1/login1.component';
import { LogoutComponent } from './logout/logout.component';
import { Stat1Component } from './stat1/stat1.component';
import { StatruleComponent } from './statrule/statrule.component';
import { CrudComponent } from './crud/crud.component';
import { AddruleComponent } from './addrule/addrule.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {DataTablesModule} from 'angular-datatables';
import { PredictionComponent } from './prediction/prediction.component';
import { Test2Component } from './test2/test2.component';
import { MenuComponent } from './menu/menu.component';
import { CrudutilisateurComponent } from './crudutilisateur/crudutilisateur.component';
import { AddutilisateurComponent } from './addutilisateur/addutilisateur.component';
import { EditutilisateurComponent } from './editutilisateur/editutilisateur.component';
import { Addutilisateur1Component } from './addutilisateur1/addutilisateur1.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        HttpClientModule,
        JwBootstrapSwitchNg2Module,
       
        DataTablesModule
      ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        RuleComponent,
        StatComponent,
        TestComponent,
        Test1Component,
        LinechartComponent,
       
        

        
        Login1Component,
        
        LogoutComponent,
        
        Stat1Component,
        
        StatruleComponent,
        
        CrudComponent,
        
        AddruleComponent,
        
        AddComponent,
        
        EditComponent,
        
        PredictionComponent,
        
        Test2Component,
        
        MenuComponent,
        
        CrudutilisateurComponent,
        
        AddutilisateurComponent,
        
        EditutilisateurComponent,
        
        Addutilisateur1Component,
        
     
        
        
        
        
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
