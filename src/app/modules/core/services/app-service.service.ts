

import { Injectable } from '@angular/core';
import { environment} from '../../../../environments/environment';
import { Location } from '@angular/common';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, throwError, Observable} from'rxjs';
import { CurdDemo } from '../interfaces/curd-demo';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
private apiUrl: string;
constructor(public http:HttpClient){
    this.apiUrl = environment.baseUrl;

}

getHeaders(){
  let token = 'fd@3445657fghfghgfhy66645646@##$$fdfdfdfdfdf';
  let header = new HttpHeaders()
   header = header.set('Accept', "Application/json");
   header = header.set('Authorization', `Bearer ${token}`);
   return header;
}


getAllList():Observable<CurdDemo[]>{
  return this.http.request<CurdDemo[]>('get', Location.joinWithSlash(`${this.apiUrl}`, 'products'), {
    headers:this.getHeaders(),
  }).pipe(
       catchError(this.errorHandler)
  )

}

addProduct(data:CurdDemo):Observable<CurdDemo>{
  return this.http.request<CurdDemo>('post', Location.joinWithSlash(`${this.apiUrl}`, `products`),{
    headers:this.getHeaders(),
    body:data,
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



















