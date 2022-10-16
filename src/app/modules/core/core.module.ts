import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/materials/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppServiceService} from './services/app-service.service';
const data = [
  CommonModule,
  MaterialModule,
  HttpClientModule
]

@NgModule({
  declarations: [],
  imports:data,
  exports:data,
  providers:[AppServiceService]
})
export class CoreModule { }
