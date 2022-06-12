import { Component, OnInit } from '@angular/core';
import { lora } from '../shared/lora';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-lora',
  templateUrl: './lora.component.html',
  styleUrls: ['./lora.component.scss']
})
export class LoraComponent implements OnInit {
  loraData!: lora;
  author = "default";
  title = "default";
  content = "default";
  date = "default";
  constructor(private authenticationService: AuthService) { }

  ngOnInit(): void {
    this.getAPiLora();
  }
  getAPiLora(): void {
    this.authenticationService.getApi().subscribe((data: lora) => {this.loraData = data
      this.author = data.author
      this.content = data.content
      this.title = data.title
      this.date = data.date

      console.log(this.loraData)});
  }
}
