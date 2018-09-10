import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
 
@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
 
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req)
        .pipe(
            tap(
                // Succeeds when there is a response; ignore other events
                event => {
                    if(event instanceof HttpResponse) {
                        console.log(event);
                    }
                },
                // Operation failed; error is an HttpErrorResponse
                error => {
                    if(error instanceof HttpErrorResponse) {
                        if(error.status == 401) {
                            window.location.href='http://auth.anajoa.com/api/auth/login';
                        }
                    }
                }
            )
        );
  }
}