import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent }  from './app.component';
import {GithubComponent} from './components/github.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, Ng2Bs3ModalModule],
    declarations: [AppComponent, GithubComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }

//
// @NgModule({
//   imports: [
//     BrowserModule,
//     ModalModule.forRoot(),
//     BootstrapModalModule
//   ],
//   declarations: [ AppComponent, GithubComponent],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }
