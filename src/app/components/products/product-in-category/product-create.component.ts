import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../categorys/category.model';
import { CategoryService } from '../../categorys/category.service';
import { Products } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductInCategoryComponent implements OnInit {

  products: Products = {
    name: '',
    price: '',
    category: '',
  }

  categorys!: Category 

  constructor(
    private router: Router, 
    private productService: ProductService,
  ) { }

  ngOnInit(): void {  
    let category = localStorage.getItem('category')?.replace(/"/g, '');  
    this.products.category = category!
  }
  
  createProduct(): void {   
    if ((this.products.name === '') || (this.products.price === '')) {
      alert('Favor preencher todos os campos')
      return
    }
    
    this.productService.create(this.products).subscribe(() => {
      alert('Produto criado com sucesso!');
      this.router.navigate(['products'])
    })      
  }

  cancel() {
    this.router.navigate(['categorys'])
  }

}
