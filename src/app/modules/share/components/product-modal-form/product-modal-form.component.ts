import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppServiceService} from '../../../core/services/app-service.service';
interface gnd  {
  name:string,
  displayName:string
}

@Component({
  selector: 'app-product-modal-form',
  templateUrl: './product-modal-form.component.html',
  styleUrls: ['./product-modal-form.component.css']
})

export class ProductModalFormComponent implements OnInit {
productForm!:FormGroup;



genders:gnd[] =  [
  {
    name:'Male',
    displayName:'01. First...........',
    
  },

  {
    name:'Female',
    displayName:'02. Second...........',
    
  },
  {
    name:'Other',
    displayName:'03. Third...........',
    
  }
];
  constructor(private api: AppServiceService, public fb: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public dataOb: any, public dialogRef: MatDialogRef<ProductModalFormComponent>) {

     

   }

  ngOnInit(): void {
    this.buildForm();
    console.log('-------------cccccccccccc-----------', this.dataOb);
  }



  private buildForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required],
    })
  }

  saveData(){
if(this.productForm.valid){
  this.api.addProduct(this.productForm.value).subscribe({
    next:(data) => {
      this.productForm.reset();
     this.dialogRef.close('save')
    },
    error: (err) => {
      console.log('-------err---', err);
    }
  })
}
  }

}
