import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  productList(){
    return this.http.get<any>('http://localhost:8087/products/getallproduct');
    
    }

    getProduct(id: any){
    return this.http.get<any>(`http://localhost:8087/products/getproduct/${id}`);
    
  }

    addProduct(product: any): Observable<any> {
      return this.http.post('http://localhost:8087/products/addproduct', product);
    }

    deleteProduct(id: any): Observable<any> {
      return this.http.post(`http://localhost:8087/products/deleteproduct/${id}`, {});
    }


    updateProduct(id: any, data: any) {
       // Remove the id from the product object
      return this.http.post(`http://localhost:8087/products/editproduct/${id}`, data);
  }
   
}
