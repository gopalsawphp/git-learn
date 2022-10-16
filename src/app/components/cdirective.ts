import { Directive , ElementRef} from "@angular/core";

@Directive({
  selector:'[fht]'
})


export class cDirective {
  constructor(private eleRef : ElementRef){
    eleRef.nativeElement.style.color = 'red';
  }
}