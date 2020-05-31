import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsCollection;
  products: Observable<Product[]>;
  productsDoc;

  constructor(public db: AngularFirestore) {
    this.products = this.db.collection('products').valueChanges();
  }

  getProducts() {
    return this.products;
  }
}
