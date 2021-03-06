import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { ViewCategorysComponent } from './pages/view-categorys/view-categorys.component'
import { CategoryCreateComponent } from './components/categorys/category-create/category-create.component';
import { CategoryUpdateComponent } from './components/categorys/category-update/category-update.component';
import { CategoryDeleteComponent } from './components/categorys/category-delete/category-delete.component';
import { ViewProductsComponent } from './pages/view-products/view-products.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';
import { ProductShowComponent } from './components/products/product-show/product-show.component';
import { ProductInCategoryComponent } from './components/products/product-in-category/product-create.component';
import { CategoryShowComponent } from './components/categorys/category-show/category-show.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'categorys', 
    component: ViewCategorysComponent
  },
  { 
    path: 'categorys/create', 
    component: CategoryCreateComponent
  },
  { 
    path: 'categorys/createProducts/:nameCategory', 
    component: ProductInCategoryComponent
  },
  { 
    path: 'categorys/update/:id', 
    component: CategoryUpdateComponent
  },
  { 
    path: 'categorys/delete/:id', 
    component: CategoryDeleteComponent
  },
  { 
    path: 'categorys/listProducts/:category', 
    component: CategoryShowComponent  
  },
  { 
    path: 'products', 
    component: ViewProductsComponent 
  },
  { 
    path: 'products/create', 
    component: ProductCreateComponent
  },
  { 
    path: 'products/update/:id', 
    component: ProductUpdateComponent
  },
  { 
    path: 'products/delete/:id', 
    component: ProductDeleteComponent
  },
  { 
    path: 'products/showProducts/:id', 
    component: ProductShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
