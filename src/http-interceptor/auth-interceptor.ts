// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor() {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
//     const login ={
//         'Content-Type ': 'application/json'
//     //    'Accept'  : 'application/json ,text/plain'
//     }
//    const  request1 = request.clone({
//       setHeaders: login
//     });
//     return next.handle(request1);
//   }
// }


import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  currentUrl:any;
  gettoken: any;
  payload: any = [];
  expDate:any;

  constructor(private router:Router) {
   this.currentUrl =  this.router.url
  //  console.log("interceptor Url",this.currentUrl)

   /********************************************************/
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
/***********************Loader****************************************/
    // let loadingRef: LoadingOverlayRef;
    // Promise.resolve(null).then(() => loadingRef = this.loadingService.open());
/*********************************************************************/

    const header =  {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json , text/plain , */*"
      }
      const authReq = request.clone({
        setHeaders: header
      });
      return next.handle(authReq).pipe(
        tap((event: HttpEvent<any>) => {
        },
        (err: any) => {
         
      }));
       
    }
  }