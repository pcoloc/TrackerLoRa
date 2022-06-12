import { Component, OnInit } from '@angular/core';
import { lora } from '../shared/lora';
import { AuthService } from '../shared/auth.service';
//import { NotificationService } from '../service/notification.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private authenticationService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAPiLora();

  }
  getAPiLora(): void {
    //this.showToasterError();
    this.authenticationService.getApi().subscribe((data: lora) => {this.loraData = data
      this.author = data.author
      this.content = data.content
      this.title = data.title
      this.date = data.date
      this.showToasterSuccess("Data shown successfully !!");
      console.log(this.loraData)},
      (error) => {
        this.showToasterError("API Error: " + error.message);
      }
      );

  }

  showToasterSuccess(msg: any){
    this.toastr.success(msg, "trackerLoRa dice:")
}

showToasterError(error: any){
    console.log("mensaje de error");
    this.toastr.error(error, "trackerLoRa dice:")
}

showToasterInfo(){
    this.toastr.info("This is info", "trackerLoRa dice:")
}

showToasterWarning(){
    this.toastr.warning("This is warning", "trackerLoRa dice:")
}
}
