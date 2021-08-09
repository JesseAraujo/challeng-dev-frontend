import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Category } from '../category.model'
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  category!: Category


  constructor(
    private router: Router, 
    private categoryService: CategoryService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.categoryService.readById(String(id)).subscribe(category => {
      this.category = category
    })
  }

  updateCategory(): void {
    if (this.category.name === '') {
      alert('Favor preencher todos os campos')
      return
    }
    
    this.categoryService.update(this.category).subscribe(() => {
      this.categoryService.showMessage('Categoria alterada com sucesso!')
      this.router.navigate(['categorys'])
    })
  }

  cancel() {
    this.router.navigate(['categorys'])
  }

}
