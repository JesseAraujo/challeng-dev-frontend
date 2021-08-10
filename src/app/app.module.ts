import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewCategorysComponent } from './pages/view-categorys/view-categorys.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { CategoryCreateComponent } from './components/categorys/category-create/category-create.component';

import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from  '@angular/forms'
import { CategorysReadComponent } from './components/categorys/category-read/category-read.component';
import { CategoryUpdateComponent } from './components/categorys/category-update/category-update.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryDeleteComponent } from './components/categorys/category-delete/category-delete.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component'
import { HeaderComponentCategorys } from './components/categorys/layout/header/header.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductReadComponent } from './components/products/product-read/product-read.component';
import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';
import { ProductShowComponent } from './components/products/product-show/product-show.component';
import { ViewProductsComponent } from './pages/view-products/view-products.component';
import { HeaderProductsComponent } from './components/products/layout/header/header-products.component';
import { ProductInCategoryComponent } from './components/products/product-in-category/product-create.component';
import { CategoryShowComponent } from './components/categorys/category-show/category-show.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewCategorysComponent,
    ProductCreateComponent,
    CategoryCreateComponent,
    CategorysReadComponent,
    CategoryUpdateComponent,
    CategoryDeleteComponent,
    CategoryShowComponent,
    HeaderComponent,
    FooterComponent,
    HeaderComponentCategorys,
    ProductUpdateComponent,
    ProductReadComponent,
    ProductDeleteComponent,
    ProductShowComponent,
    ProductInCategoryComponent,
    ViewProductsComponent,
    HeaderProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
