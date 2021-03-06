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
export class ProductCreateComponent implements OnInit {

  products: Products = {
    name: '',
    price: '',
    category: '',
  }

  categorys!: Category[] 
  category!: Category

  constructor(
    private router: Router, 
    private categoryService: CategoryService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {  
    this.categoryService.read().subscribe(categorys => {
      this.categorys = categorys
    }) 

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
    this.router.navigate(['products'])
  }

}
