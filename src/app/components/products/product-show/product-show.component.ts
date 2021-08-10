import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../product.model';
import { ProductService } from '../product.service';

import { faArrowLeft, faInfo } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {

  faArrowLeft = faArrowLeft
  faInfo = faInfo

  product!: Products

  constructor( 
    private productService: ProductService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(String(id)).subscribe(product => {
      this.product = product
    })
  }

}
