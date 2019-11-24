import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { tap, retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

export class HttpErrorInterceptor implements HttpInterceptor {
    // public toasterService: ToastrService
    constructor(private router: Router,
                ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");
        return next.handle(req)
        .pipe(
            tap(evt=> {
                if (evt instanceof HttpResponse) {
                    if (evt.body && evt.body.success) {
                        // this.toasterService.success(evt.body.success.message, evt.body.success.status, { positionClass: 'toast-bottom-center' });
                        window.alert(evt.body.success)
                    }
                }
            }),
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage= '';
                if  (error.error instanceof ErrorEvent) {
                    //client side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    //server side errors
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    switch (error.status) {
                        case 401:
                            errorMessage = `Please login to proceed`;
                            this.router.navigateByUrl('/login');
                            break;
                        case 403:
                            this.router.navigateByUrl('/base/home');
                            break;
                        case 400:
                            errorMessage = 'Please fill in the fields correctly';
                            break;
                        case 404:
                            errorMessage = 'Resource is not available';
                            break;
                    }

                }
                // try {
                //     this.toasterService.error(error.message, error.message, { positionClass: 'toast-bottom-center' });
                // } catch(e) {
                //     this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
                // }
                window.alert(errorMessage);
                return throwError(errorMessage);
            })
        )
    }

}