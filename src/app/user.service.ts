import { Injectable } from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs';
import {HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  post(url:string,body:any):Observable<any>{
    return this._http.post(url,JSON.stringify(body));
 }
 get(url: string):Observable<any>{
   return this._http.get(url);
 }
}
