import { AfterViewInit, Component, DoCheck } from '@angular/core';
import { ProductService } from '../../appService/product.service';
import { log } from 'console';

@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrl: './product-chart.component.css'
})

export class ProductChartComponent implements AfterViewInit {
  productArr : any[]= [];
  constructor(private productService : ProductService){  }
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;
  view:[number,number] = [this.width, this.height];
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Category';
  showYAxisLabel = true;
  yAxisLabel = 'Price';
  showGridLines = false;
  timeline = true;
  showLabels = true;
  public productData : any[] = [];

  ngAfterViewInit(): void {
    this.productService.productData.subscribe((res : any)=>{
      this.productData = res;
    })
  }
}
