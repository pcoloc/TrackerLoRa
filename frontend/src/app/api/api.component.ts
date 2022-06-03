import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
    requestURL = 'https://backend.lopezcarrillo.com/lora/data';
    api: any;
    token: string | undefined;
  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    this.http.get<any>(this.requestURL, ).subscribe(data => {
          this.api = data.total;
      })
      console.log(this.api);
  }

}
