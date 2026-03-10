import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';    // ← import the pipe

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    CurrencyPipe,          // ← add the pipe (or simply import CommonModule)
    // …any other modules…
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
