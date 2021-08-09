import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product!: Products

  constructor(
    private router: Router, 
    private productService: ProductService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(String(id)).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productService.delete(Number(this.product.id)).subscribe(() => {
      alert('Produto excluído com sucesso!')
      this.router.navigate(['products'])
    })
  }

  cancel() {
    this.router.navigate(['products'])
  }

}
