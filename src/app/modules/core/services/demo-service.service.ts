import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Location } from "@angular/common";
import {catchError, pipe, Observable, throwError } from "rxjs";
import { environment} from '../../../../environments/environment'
import { CurdDemo } from '../interfaces/curd-demo';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  public url:string;
  constructor(private http: HttpClient) { 
     this.url = environment.baseUrl;
  }

  gerHeader(){
    let headers = new HttpHeaders();
    headers = headers.set("Accept","Application/json");
    headers = headers.set("Authorization","Bearer xyz");
    return headers;
  }



  getProduct():Observable<CurdDemo[]>{
      return this.http.request<CurdDemo[]>('get', Location.joinWithSlash(`${this.url}`,'products'),{
        headers:this.gerHeader(),
      }).pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
