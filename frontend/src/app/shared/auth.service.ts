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
    let formData: any = new FormData();
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
    let formData: any = new FormData();
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
    localStorage.removeItem('token');
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
  async getTtnMapper(gw, sf, pw): Promise<Observable<any>> {
    let api = `${this.endpoint}/ttnMapperData/cleaned/${gw}/${sf}/${pw}`;
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

  //For Statistics Page
  getCountSf(sf): Observable<any> {
    let api = `${this.endpoint}/ttnMapperData/sf/${sf}/`
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || 0;
      }
      ),
      catchError(this.handleError,),
    );
  }

  getCountPw(pw): Observable<any> {
    let api = `${this.endpoint}/ttnMapperData/pw/${pw}/`
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || 0;
      }
      ),
      catchError(this.handleError,),
    );
  }

  getCountGw(gw): Observable<any> {
    let api = `${this.endpoint}/ttnMapperData/gw/${gw}/`
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || 0;
      }
      ),
      catchError(this.handleError,),
    );
  }

  getCountGwSf(gw, sf): Observable<any> {
    let api = `${this.endpoint}/ttnMapperData/gwsf/${gw}/${sf}`
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || 0;
      }
      ),
      catchError(this.handleError,),
    );
  }

  getCountGwPw(gw, pw): Observable<any> {
    let api = `${this.endpoint}/ttnMapperData/gwpw/${gw}/${pw}`
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || 0;
      }
      ),
      catchError(this.handleError,),
    );
  }

  getCountSfPw(sf, pw): Observable<any> {
    let api = `${this.endpoint}/ttnMapperData/sfpw/${sf}/${pw}`
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || 0;
      }
      ),
      catchError(this.handleError,),
    );
  }

  getCountGwSfPw(gw, sf, pw): Observable<any> {
    let api = `${this.endpoint}/ttnMapperData/gwsfpw/${gw}/${sf}/${pw}`
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || 0;
      }
      ),
      catchError(this.handleError,),
    );
  }

  getCountTotalRows(): Observable<any> {
    let api = `${this.endpoint}/ttnMapperData/total`
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
    console.log("Tenemos un error, apáñatelas como puedas");
    return throwError(() => msg);
  }




}
