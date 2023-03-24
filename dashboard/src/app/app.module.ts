import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localePt, 'pt-BR');



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
