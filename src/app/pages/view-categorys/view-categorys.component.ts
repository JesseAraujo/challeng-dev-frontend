import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-view-categorys',
  templateUrl: './view-categorys.component.html',
  styleUrls: ['./view-categorys.component.scss']
})
export class ViewCategorysComponent implements OnInit {

  faPlusCircle = faPlusCircle

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCategorysCreate(): void {
    this.router.navigate(['categorys/create'])
  }  
}
