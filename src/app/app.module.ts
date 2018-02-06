import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ContatoModule} from './contato/contato.module';
import {AppRoutingModule} from './app-routing.module';
import {NossaVisaoModule} from './nossa-visao/nossa-visao.module';
import {QuemSomosModule} from './quem-somos/quem-somos.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContatoModule,
    AppRoutingModule,
    NossaVisaoModule,
    QuemSomosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
