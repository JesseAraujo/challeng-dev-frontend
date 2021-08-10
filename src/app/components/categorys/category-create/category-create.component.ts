import { CategoryService } from '../category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    name: '',  
    description: ''
  }


  constructor(
    private route: Router, 
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {   
  }

  createCategory(): void {
    if (this.category.name === '') {
      alert('Favor preencher todos os campos')
      return
    }

    this.categoryService.create(this.category).subscribe(() => {
      alert('Categoria criada com sucesso!');
      this.route.navigate(['categorys']);
    })

  }

  cancel() {
    this.route.navigate(['categorys']);
  }

}
