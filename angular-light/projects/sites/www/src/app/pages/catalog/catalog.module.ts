import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCatalogRoutingModule } from './catalog-routing.module';
import { AppCatalogComponent } from './catalog.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [
    AppCatalogComponent
  ],
  imports: [
    CommonModule,
    FooterComponent,
    AppCatalogRoutingModule,
  ],
  exports: [
  ]
})
export class AppCatalogModule { }
