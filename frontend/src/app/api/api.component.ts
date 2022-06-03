import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getPackedSettings } from 'http2';
import { AuthService } from '../shared/auth.service';
import { Lora } from './lora-data';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
    requestURL = 'https://backend.lopezcarrillo.com/lora/data';
    api: Lora | undefined;
    token = this.authService.getToken();;
    headers = new HttpHeaders().set('Authorization', 'Bearer ${this.token}');
  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.token);
    this.authService.getApi().subscribe(data => { this.api = data.total; console.log(this.api); });

  }

}
