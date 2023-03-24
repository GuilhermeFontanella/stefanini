import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { DialogTemplateComponent } from './shared/components/dialog-template/dialog-template.component';
registerLocaleData(localePt, 'pt-BR');



@NgModule({
  declarations: [
    AppComponent,
    DialogTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'    
    },
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
