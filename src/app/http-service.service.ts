import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class HttpServiceService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    debugger
    return next.handle(req).map(evt => {
      if (evt instanceof HttpResponse) {
        debugger
        console.log('---> status:', evt.status);
        console.log('---> filter:', req.params.get('filter'));
      }
    });
  }
}
