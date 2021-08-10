import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Products } from '../../products/product.model';
import { ProductService } from '../../products/product.service';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrls: ['./category-show.component.scss']
})
export class CategoryShowComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  products!: Products[]


  constructor(
    private productsService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    let category = String(localStorage.getItem('category')?.replace(/"/g, ''));  
    this.categoryService.readByCategory(String(category)).subscribe(product => {
      this.products = product
    })
  }

  back() {
    this.router.navigate(['/categorys'])
  }

  
}
