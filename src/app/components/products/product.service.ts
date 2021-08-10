import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Products } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = "http://localhost:3001/products"


  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product: Products): Observable<Products> {
    return this.http.post<Products>(this.api, product)
  }

  read(): Observable<Products[]> {
    return this.http.get<Products[]>(this.api)
  }

  readById(id: string): Observable<Products> {
    const url = `${this.api}/${id}`
    return this.http.get<Products>(url)
  }

  update(product: Products): Observable<Products> {
    const url = `${this.api}/${product.id}`
    return this.http.put<Products>(url, product)
  }

  delete(id: number): Observable<Products> {
    const url = `${this.api}/${id}`
    return this.http.delete<Products>(url)
  }
}
