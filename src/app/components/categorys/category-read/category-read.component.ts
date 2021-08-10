import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.scss']
})
export class CategorysReadComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;
  faEye = faEye;

  categorys!: Category[] 

  constructor(
    private categoryService: CategoryService,
  ) { }


  ngOnInit(): void {
    this.categoryService.read().subscribe(categorys => {
      this.categorys = categorys
    })
  }

  salveStorage(category: string) {
    window.localStorage.setItem("category", JSON.stringify(category))
  }

}
