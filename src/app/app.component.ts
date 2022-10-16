import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AppServiceService} from '../app/modules/core/services/app-service.service';
import {CurdDemo } from '../app/modules/core/interfaces/curd-demo';
import { ProductModalFormComponent } from '../app/modules/share/components/product-modal-form/product-modal-form.component';
interface InObj {
  title:string,
  btn_name:string;
  img:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit  {
 
 public dataObj:InObj[] = [
  {
    "title":"Card 1",
    "btn_name":"click1",
    img:"https://picsum.photos/id/870/200/300?grayscale&blur=2"
  },

  {
    "title":"card 2",
    "btn_name":"clik2",
    img:"https://picsum.photos/200/300?grayscale"
  },

  {
    "title":"1",
    "btn_name":"click3",
    img:"https://picsum.photos/seed/picsum/200/300"
  },
]

  displayedColumns: string[] = ['id', 'name', 'email', 'phone','description','price','quantity','date','gender','status'];
  dataSource!: MatTableDataSource<CurdDemo>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 constructor(private api: AppServiceService, public dialog: MatDialog){


 }
  ngOnInit(){
      this.getData();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getData(){
    this.api.getAllList().subscribe({
      next: (data:CurdDemo[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
          console.log('----------------error-----------',err);
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductModalFormComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result=='save'){
      this.getData();
     }
    });
  }

}

 