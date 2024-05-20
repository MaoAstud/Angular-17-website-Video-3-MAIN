import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:9780/api/streaming'; // URL de tu API

  constructor(private http: HttpClient,  private toastr: ToastrService) { }

  iniciarSesion(user: any): Observable<any> {
    console.log(user);
    return this.http.post<any>(`${this.apiUrl}/auth/iniciar/sesion`, user).pipe(
      catchError(this.handleError)
    );
  }

  registro(user: any): Observable<any> {
    console.log(user);
    return this.http.post<any>(`${this.apiUrl}/auth/usuario`, user).pipe(
      catchError(this.handleError)
    );
  }

  creacionCanal(user: any): Observable<any> {
    console.log(user);
    return this.http.post<any>(`${this.apiUrl}/canal`, user).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log("Error>",error);
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      this.toastr.error(`Error: ${error.error.message}`, 'Error del cliente');
    } else {
      // Error del lado del servidor
      this.toastr.error(`Error: ${error.status}, ${error.message}`, 'Error del servidor');
    }

    // Retorna un observable con un mensaje de error para que la aplicación continúe funcionando
    return throwError('Algo salió mal; inténtalo de nuevo más tarde.');
  }
}

  // Otros métodos para otras solicitudes (POST, PUT, DELETE, etc.)

