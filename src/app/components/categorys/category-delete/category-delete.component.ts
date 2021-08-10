import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {

  category!: Category

  constructor(
    private router: Router, 
    private categoryService: CategoryService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.categoryService.readById(String(id)).subscribe(category => {
      this.category = category
    })
  }

  deleteCategory(): void {
    this.categoryService.delete(Number(this.category.id)).subscribe(() => {
      alert('Categoria excluída com sucesso!')
      this.router.navigate(['categorys'])
    })
  }

  cancel() {
    this.router.navigate(['categorys'])
  }

}
