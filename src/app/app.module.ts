import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  CoreModule } from '../app/modules/core/core.module';
import { ChildComponent } from './components/child/child.component';
import { uxPipe } from './components/uxPipe'
import { cDirective } from './components/cdirective';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ShareModule } from '../app/modules/share/share.module';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    uxPipe,
    cDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
