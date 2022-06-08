import { Component, OnInit } from '@angular/core';
import { lora } from '../shared/lora';

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
    this.getAPiLora();
  }
  getAPiLora(): void {
    this.data = this.authService.getApi();
    console.log(this.data);
  }
}
