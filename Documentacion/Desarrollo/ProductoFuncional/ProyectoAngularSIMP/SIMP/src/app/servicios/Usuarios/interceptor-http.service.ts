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
      // Clona la solicitud y agrega el token al encabezado de autorización
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        },
        // Asegúrate de clonar correctamente el cuerpo de la solicitud
        body: request.method !== 'GET' ? request.body : undefined
      });
      console.log("Dentro del interceptor de http-----",authReq,"-------");
      
      // Continúa con la solicitud modificada
      return next.handle(authReq);
    }
    console.log("fuera del interceptor de http-----",request,"-------");

    // Si no hay token, simplemente continúa con la solicitud original
    return next.handle(request);
  }
}
