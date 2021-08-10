import { Component, OnInit } from '@angular/core'

import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import { Products } from '../product.model'
import { ProductService } from '../product.service'


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  faEdit = faEdit
  faTrash = faTrash
  faEye = faEye

  products!: Products[]

  constructor(
    private prouctsService: ProductService 
  ) {}


  ngOnInit(): void {
    this.prouctsService.read().subscribe(products => {
      this.products = products
    })
  }

}
