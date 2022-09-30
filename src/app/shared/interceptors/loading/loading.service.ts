import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private countRequest = 0;
  constructor(
    private _spinnerService: NgxSpinnerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.countRequest) {
      this._spinnerService.show()
    }
    this.countRequest++;
    return next.handle(request).pipe(
      finalize(() => {
          this.countRequest--;
          if (!this.countRequest) {
            this._spinnerService.hide();
          }
        })
      );
  }
}