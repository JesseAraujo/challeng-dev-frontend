import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  faPlusCircle = faPlusCircle

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductsCreate(): void {
    this.router.navigate(['products/create'])
  } 

}
