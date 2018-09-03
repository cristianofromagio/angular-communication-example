import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TemplateFundamentalsComponent } from './template-fundamentals.component';
import { Template2FundamentalsComponent } from './template2-fundamentals.component';

import { CommunicationService } from './communication.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TemplateFundamentalsComponent,
    Template2FundamentalsComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ CommunicationService ]
})
export class AppModule { }
