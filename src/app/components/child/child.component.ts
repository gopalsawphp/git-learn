import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { DemoServiceService} from '../../modules/core/services/demo-service.service';
import { CurdDemo } from '../../modules/core/interfaces/curd-demo';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  public productDataObj!:CurdDemo[]
  constructor(private api: DemoServiceService) {
  }

  ngOnInit(){
this.getProductList();
  }


  getProductList(){
      this.api.getProduct().subscribe({
        next: (data:CurdDemo[]) => {
          this.productDataObj = data;
        },
        error: () => {

        }
      })
  }



}
