import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModalFormComponent } from './components/product-modal-form/product-modal-form.component';
import {MaterialModule } from '../../modules/core/materials/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProductModalFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
