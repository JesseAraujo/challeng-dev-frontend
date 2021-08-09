import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Category } from './category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  api = "http://localhost:3001/categorys"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.api, category)
  }

  createProduct(category: Category): Observable<Category> {
    const url = `${this.api}/${category.id}`
    return this.http.post<Category>(url, category.products)
  }

  read(): Observable<Category[]> {
    return this.http.get<Category[]>(this.api)
  }

  readById(id: string): Observable<Category> {
    const url = `${this.api}/${id}`
    return this.http.get<Category>(url)
  }

  update(category: Category): Observable<Category> {
    const url = `${this.api}/${category.id}`
    return this.http.put<Category>(url, category)
  }

  delete(id: number): Observable<Category> {
    const url = `${this.api}/${id}`
    return this.http.delete<Category>(url)
  }
}
