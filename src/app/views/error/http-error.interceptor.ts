import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");
        return next.handle(req)
        .pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage= '';
                if  (error.error instanceof ErrorEvent) {
                    //client side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    //server side errors
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                window.alert(errorMessage);
                return throwError(errorMessage);
            })
        )
    }

}