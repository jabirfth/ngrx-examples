import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

    readonly apiUrl = `http://localhost:8080/product-api/products/`;

    constructor(private http: HttpClient) { }

    listProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiUrl}/`);
    }

    getProduct(pId: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/${pId}`);
    }

    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(`${this.apiUrl}/`, product);

    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);

    }

    deleteProduct(pId: number): Observable<HttpResponse<any>> {
        return this.http.delete(`${this.apiUrl}/${pId}`, { observe: 'response' });
    }
}
