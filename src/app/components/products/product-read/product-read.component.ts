import { Component, OnInit } from '@angular/core'

import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import { Category } from '../../categorys/category.model'
import { CategoryService } from '../../categorys/category.service'


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  faEdit = faEdit
  faTrash = faTrash
  faEye = faEye

  categorys!: Category[]

  constructor(
    private categoryService: CategoryService 
  ) {}


  ngOnInit(): void {
    this.categoryService.read().subscribe(products => {
      this.categorys = products
    })
  }

}
