import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Lora } from './lora-data';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
    requestURL = 'https://pve.lopezcarrillo.com/lora/data';
    api: Lora | any;
  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
   // this.api = this.authService.getApi();
    console.log(this.api);
  }

}
