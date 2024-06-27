import { Component } from '@angular/core';
import { ProductService } from './appService/product.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListComponent } from './product/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ref: DynamicDialogRef | any;

  nameSearch: string = ''

  constructor(private _productService: ProductService, public dialogService: DialogService) {

  }

  productList: any[] = [];
  ngOnInit(): void {
    console.log(this._productService.productList);
    this.getProductList()
  }

  getProductList() {
    this.productList = this._productService.productList;
  }


  onAddProduct() {
    this.ref = this.dialogService.open(ProductListComponent, {
      header: 'Select a Product',
      width: '70%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    this.ref.onClose.subscribe((product: any) => {
      console.log(product);
      this.productList.push(product);
      console.log(this.productList);
      this._productService.productData.next(this.productList);
    });
  }


  onUpdateProduct(product: any) {
    debugger
    this.ref = this.dialogService.open(ProductListComponent, {
      header: 'Select a Product',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: product
    });

    this.ref.onClose.subscribe((product: any) => {
      console.log(product);
      const index = this.productList.findIndex(e => e.id == product.id);
      if (index !== -1) {
        this.productList[index] = product;
      }
    });
  }


  onDeleteProduct(rowData: any) {
    const index = this.productList.indexOf(rowData);
    if (index > -1) {
      this.productList.splice(index, 1);
    }
  }
}
