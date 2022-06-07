import { Component, OnInit } from '@angular/core';
import { lora } from '../shared/Lora';

@Component({
  selector: 'app-lora',
  templateUrl: './lora.component.html',
  styleUrls: ['./lora.component.scss']
})
export class LoraComponent implements OnInit {
  authService: any;
  data!: lora;
  constructor() { }

  ngOnInit(): void {
  }
  getAPiLora() {
    this.authService.getApi().subscribe((res) => {
      if (res.result) {
        console.log(res);
        this.data = res.data;
      }
    });;
  }
}
