import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
    requestURL = 'https://backend.lopezcarrillo.com/lora/api';
    api: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.requestURL).subscribe(data => {
          this.api = data.total;
      })
      console.log(this.api);
  }

}
