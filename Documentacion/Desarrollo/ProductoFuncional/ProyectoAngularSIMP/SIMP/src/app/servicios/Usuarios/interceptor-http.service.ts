import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompartidosService } from '../Compartidos/compartidos.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorHttpService implements HttpInterceptor {
  constructor(private CompartidosService: CompartidosService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.CompartidosService.getToken();

    if (token) {
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        },
        body: request.method !== 'GET' ? request.body : undefined
      });
      console.log("Dentro del interceptor de http-----",authReq,"-------");
      
      return next.handle(authReq);
    }
    console.log("fuera del interceptor de http-----",request,"-------");

    return next.handle(request);
  }
}
