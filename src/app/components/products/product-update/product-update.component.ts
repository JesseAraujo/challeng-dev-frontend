import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../categorys/category.model';
import { CategoryService } from '../../categorys/category.service';
import { Products } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  categorys!: Category[]
  products!: Products

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(String(id)).subscribe(products => {
      this.products = products
    })

    this.categoryService.read().subscribe(categorys => {
      this.categorys = categorys
    })   
  }

  updateCategory(): void {  

    this.productService.update(this.products).subscribe(() => {
      alert('Produto alterado com sucesso!')
      this.router.navigate(['products'])
    })
    
  }

  cancel() {
    this.router.navigate(['products'])
  }

}
