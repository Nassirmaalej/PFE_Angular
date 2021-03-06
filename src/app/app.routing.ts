import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { RuleComponent } from './components/rule/rule.component';
import { StatComponent } from './components/stat/stat.component';
import { TestComponent } from './components/test/test.component';
import { Test1Component } from './components/test1/test1.component';
import {LinechartComponent} from './components/linechart/linechart.component';
import { Login1Component } from './components/login1/login1.component';
import { Stat1Component } from './components/stat1/stat1.component';
import { StatruleComponent } from './components/statrule/statrule.component';
import { CrudComponent } from './components/crud/crud.component';
import { AddruleComponent } from './components/addrule/addrule.component';
import { AddComponent } from './components/add/add.component';
import {EditComponent } from './components/edit/edit.component';
import {PredictionComponent } from './components/prediction/prediction.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './test3/test3.component';


import { RegisterComponent } from './register/register.component';
import { Login2Component } from './login2/login2.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { CrudutilisateurComponent } from './components/crudutilisateur/crudutilisateur.component';
import { AddutilisateurComponent } from './components/addutilisateur/addutilisateur.component';
import { EditutilisateurComponent } from './components/editutilisateur/editutilisateur.component';
import { Addutilisateur1Component } from './components/addutilisateur1/addutilisateur1.component';






const routes: Routes =[
    { path: 'index',                component: ComponentsComponent },
    { path: 'rule',                component: RuleComponent },
    { path: 'linechart',                component: LinechartComponent },
    { path: 'stat',                component: StatComponent },
    { path: 'test',                component: TestComponent },
    { path: 'test1',                component: Test1Component },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'login',       component: LoginComponent },
    { path: '',       component: LoginComponent },
    { path: 'crudutilisateur',       component: CrudutilisateurComponent },

    { path: 'addutilisateur',       component: AddutilisateurComponent },
    { path: 'addutilisateur1',       component: Addutilisateur1Component },


    { path: 'editutilisateur',       component: EditutilisateurComponent },


    { path: 'logout',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'login1',       component: Login1Component },
    { path: 'stat1',                component: Stat1Component },
    { path: 'statrule',                component: StatruleComponent },
    { path: 'crud',                component: CrudComponent },
    { path: 'add',                component: AddComponent },
    { path: 'edit',                component: EditComponent },
    { path: 'prediction',                component: PredictionComponent },
    { path: 'test2',                component: Test2Component },
    { path: 'test3',                component: Test3Component },
    { path: 'home',                component: HomeComponent },
    { path: 'user',                component: UserComponent },
    { path: 'pm',                component: PmComponent },
    { path: 'admin',                component: AdminComponent },
    { path: 'auth/login',                component: Login2Component },
    { path: 'signup',                component: RegisterComponent },
    { path: 'user',                component: UserComponent },

];
export const routing = RouterModule.forRoot(routes);

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
