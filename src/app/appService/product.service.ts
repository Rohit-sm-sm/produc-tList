import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productData = new Subject<any>;
  

  productList : any[] = [
    // {name: 'Laptop', value : 60000, category : 'Electronics'},
    // {name: 'Mobile', value : 70000, category : 'Electronics'}
  ]
}
