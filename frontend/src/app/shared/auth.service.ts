import { Injectable } from '@angular/core';
import { User } from './user';
import { UserWP } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { lora } from './lora';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string =  'https://backend.lopezcarrillo.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  currentUser = {};
  constructor(private http: HttpClient, public router: Router, private toastr: ToastrService) {}
  // Register
  signUp(user: User): Observable<any> {
    var formData: any = new FormData();
    formData.append('password', user.password);
    formData.append('user_name', user.user_name);
    formData.append('email', user.email);
    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);

    let api = `${this.endpoint}/auth/register`;
    return this.http.post(api, formData).pipe(catchError(this.handleError));
  }
  // Login
  signIn(user: User) {
    console.log(user);
    var formData: any = new FormData();
    formData.append('password', user.password);
    formData.append('user_name', user.user_name);
    return this.http
      .post<any>(`${this.endpoint}/auth/login`, formData)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        console.log(res);
           this.getUserProfile().subscribe((res) => {
             console.log("Por aquí paso (Solicitud de Usuario)")
           this.currentUser = res;
            console.log(this.currentUser);
            this.router.navigate(['dashboard']);
           });
       });
  }
  getToken() {
    return localStorage.getItem('token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
    }
    this.router.navigate(['login']);
  }
  // User profile
 getUserProfile(): Observable<any> {
  let api = `${this.endpoint}/user/details`;
  return this.http.get(api, { headers: this.headers }).pipe(
    map((res) => {
      return res || {};
    }),
    catchError(this.handleError)
  );
  }

  getGateways(): Observable<any> {
    let api = `${this.endpoint}/client/routers`;
    return this.http.get<any>(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  getNodes(): Observable<any> {
    let api = `${this.endpoint}/client/nodes`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }
      ),
      catchError(this.handleError)
    );
  }
  getTtnMapper(): Observable<any> {
    let api = `${this.endpoint}/ttnMapper/all`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }
      ),
      catchError(this.handleError)
    );
  }


  //For LoRa Page
  getApi(): Observable<lora> {
    let api = `${this.endpoint}/lora/data`;
    return this.http.get<lora>(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)

    );
  }
  getRoutersCount(): Observable<any> {
    let api = `${this.endpoint}/client/routers/count`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || 0;
      }
      ),
      catchError(this.handleError)
    );
  }
  //For Dashboard Page
  getNodesCount(): Observable<any> {
    let api = `${this.endpoint}/client/nodes/count`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || 0;
      }
      ),
      catchError(this.handleError,),
    );
  }
  showError(message: string) {
    this.toastr.error(message, 'Error');
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if(error.status == 401){
     console.log("Error 401, No estás autorizado, inicia sesión nuevamente");
    }
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;

    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log(msg);
    }
    console.log("Tenemos un error, apañatelas como puedas");
    //this.notifyService.showError("msg", "There are some errors");
    return throwError(() => msg);
  }




}
