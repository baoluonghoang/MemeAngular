import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    // add authorization header with jwt token if available

    let currentUser = this.authenticationService.currentUserValue;
    if( currentUser && currentUser.remember_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.remember_token}`
        }
      });
    }

    return next.handle(request);
  }
}
