import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule }from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductChartComponent } from './product/product-chart/product-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    CardModule,
    NgxChartsModule
  ],
  providers: [
    provideClientHydration(),
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
