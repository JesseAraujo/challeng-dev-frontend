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

  category!: Category


  constructor(
    private router: Router, 
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {    
    const id = this.route.snapshot.paramMap.get('id')
    
    this.categoryService.readById(String(id)).subscribe(category => {
      this.category! = category!
    })
  }

  createProduct(): void {      
    this.categoryService.createProduct(this.category).subscribe(() => {
      this.categoryService.showMessage('Categoria alterada com sucesso!')
      this.router.navigate(['products'])
    }) 
  }

  cancel() {
    this.router.navigate(['categorys']);
  }

}
