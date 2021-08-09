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

  categorysName!: Category[]
  categorys!: Category


  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.categoryService.readById(String(id)).subscribe(category => {
      this.categorys.products = category.products
    })

    this.categoryService.read().subscribe(categorys => {
      this.categorysName = categorys
    })
  }

  updateCategory(): void {  

    this.categoryService.update(this.categorys).subscribe(() => {
      this.categoryService.showMessage('Produto alterado com sucesso!')
      this.router.navigate(['products'])
    })
    
  }

  cancel() {
    this.router.navigate(['products'])
  }

}
