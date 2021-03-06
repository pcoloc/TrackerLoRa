import { Component, OnInit } from '@angular/core';
import { client, clients } from './client-data';
import { gatewayService } from './gateway.service';
import { data } from './ttn-data';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GatewaysDialogComponent } from './gateways-dialog/gateways-dialog.component';

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.scss']
})
export class GatewaysComponent implements OnInit {
  client:client[] | undefined;
  ttnData: data | any;
  constructor(private gatewayService: gatewayService, private http: HttpClient, public dialog: MatDialog) {
    this.client = clients;
    const images = document.querySelectorAll('img');

images.forEach(img => {
  img.addEventListener('error', function handleError() {
    const defaultImage =
      'https://www.meme-arsenal.com/memes/8ffedeb2150f66928a2e4931dca8463d.jpg';

    img.src = defaultImage;
    img.alt = 'default';
  });
});
}
headers = new HttpHeaders().set('Authorization', `Bearer NNSXS.WBW26UJTNT2RETN5MQHFLAYFKREQRCD66E3T3UI.A2Z46I2DYQFIIOJDUTE3RHPWD5WBFXHE2YKT5XB3FPZNJB5NAGXQ`);

  //openDialog() method
  openDialog() {
    const dialogRef = this.dialog.open(GatewaysDialogComponent, {
      width: '550px',
      data: {  }
    });
  }
  ngOnInit(): void {

  }
}



