import { BoughtProductComponent } from './bought-product/bought-product.component';
import { TobuyProductComponent } from './tobuy-product/tobuy-product.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './services/products.service';
import { CheckProductDirective } from './addictional/check-product.directive';
import { UpperFirstLetterPipe } from './addictional/upper-first-letter.pipe';
import { SorterPipe } from './addictional/sorter.pipe';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    TobuyProductComponent,
    BoughtProductComponent,
    CheckProductDirective,
    UpperFirstLetterPipe,
    SorterPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
