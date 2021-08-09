import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.scss']
})
export class CategorysReadComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  categorys!: Category[] 

  constructor(private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.categoryService.read().subscribe(categorys => {
      this.categorys = categorys
    })
  }

}
