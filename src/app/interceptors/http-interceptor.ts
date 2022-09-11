import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, map, Observable, retry, throwError } from "rxjs";
import { LoadingService } from "../services/loading.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FooterComponent } from "../component/footer/footer.component";

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService, private snackBar: MatSnackBar) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    req.clone({
      setHeaders: { Authorization: 'Bearer ' + token }
    });
    this.loadingService.increase();

    return next.handle(req).pipe(
      retry(0),
      map((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse) {
          return event.body
        }
      }),
      catchError((httpError: HttpErrorResponse) => {
        return throwError(httpError);
      }),
      finalize(() => {
        this.loadingService.decrease();
      })
    );
  }
}
