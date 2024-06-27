import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../appService/product.service';
import { v4 as uuidv4 } from 'uuid';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, DoCheck{

  productForm: FormGroup | any;

  categories = [
    { label: 'Electronics', value: 'electronics' },
    { label: 'Furniture', value: 'furniture' },
    { label: 'Jewellery', value: 'jewellery' },
    { label: 'Grocery', value: 'Grocery' }
  ];
  constructor(private fb: FormBuilder, private _productService : ProductService, public dialogService: DialogService,public ref: DynamicDialogRef, public config: DynamicDialogConfig){
    if (this.config.data) {
      console.log(this.config.data);
    }
  }

  ngOnInit(): void {  

    this.productForm = this.fb.group({
      id: [uuidv4()],
      name: ['', Validators.required],
      value: [null, Validators.required],
      category: ['', Validators.required]
    });

    if (this.config.data) {
      if (this.config.data) {
        this.productForm.setValue({
          id: this.config.data.id || uuidv4(),
          name: this.config.data.name || '',
          value: this.config.data.value || null,
          category: this.config.data.category || ''
        });
      }
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
  
      let idToUse = this.productForm.value.id;
  
      if (this.config.data && this.config.data.id) {
        idToUse = this.config.data.id; 
      } else {
        idToUse = uuidv4(); 
      }

      this.productForm.patchValue({ id: idToUse });
      this._productService.productList = this.productForm.value;
      this.ref?.close(this.productForm.value);
    } else {
      console.error("Form is invalid");
    }


  }
  
  ngDoCheck(): void {
    this._productService.productList = this.productForm.value;
  }

  // onSubmit() {
  //   debugger
  //   if (this.productForm.valid) {
  //     console.log(this.productForm.value);
  //     this._productService.productList=this.productForm.value;
  //     this.productForm.patchValue({ id: uuidv4() }); // Generate new unique ID for next entry
  //     // this.productForm.reset();
  //     this.ref.close(this.productForm.value);
  //   } else {
  //     console.error("Form is invalid");
  //   }
  // }
  
}
