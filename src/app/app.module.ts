import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestTableComponent } from './invest-table/invest-table.component';
import { HttpClientModule } from '@angular/common/http';
import { InvestimentDetailComponent } from './investiment/investiment.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestTableComponent,
    InvestimentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
