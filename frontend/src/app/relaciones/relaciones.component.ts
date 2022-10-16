import { Component, OnInit } from '@angular/core';
import {Product,TopSelling,} from './table-data';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-relaciones',
  templateUrl: './relaciones.component.html',
  styleUrls: ['./relaciones.component.scss']
})
export class RelacionesComponent implements OnInit {

  totalRowCount;
  draginoCount;
  dragino;
  mikrotikCount;
  mikrotik;

  Sf7Pw1Count;
  Sf7Pw7Count;
  Sf7Pw14Count;
  Sf7TotalCount;

  Sf9Pw1Count;
  Sf9Pw7Count;
  Sf9Pw14Count;
  Sf9TotalCount;

  Pw1TotalCount;
  Pw7TotalCount;
  Pw14TotalCount;

  constructor(private authenticationService: AuthService) {
    this.dragino = "dragino-pac";
    this.mikrotik = "paco96routermikro"
 }
  ngOnInit(): void {
    this.getCountTotalRows();
    this.getCountDragino(this.dragino);
    this.getCountMikrotik(this.mikrotik);

    this.getCountGwSfPw('dragino-pac');

    this.getCountGwPw('dragino-pac');

    this.getCountGwSf('dragino-pac');
  }

  getDistancia(lat1, lon1, lat2, lon2) : number {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // this.deg2rad below
    var dLon = this.deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  getCountTotalRows() {
    this.authenticationService.getCountTotalRows().subscribe(clientCount => { this.totalRowCount = clientCount;});
  }
  getCountDragino(dragino) {
    this.authenticationService.getCountGw(dragino).subscribe(clientCount => { this.draginoCount = clientCount;});
  }

  getCountMikrotik(mikrotik) {
    this.authenticationService.getCountGw(mikrotik).subscribe(clientCount => { this.mikrotikCount = clientCount;});
  }

  getCountGwSfPw(gw) {
    this.authenticationService.getCountGwSfPw(gw, 7, 1).subscribe(clientCount => { this.Sf7Pw1Count = clientCount;});
    this.authenticationService.getCountGwSfPw(gw, 7, 7).subscribe(clientCount => { this.Sf7Pw7Count = clientCount;});
    this.authenticationService.getCountGwSfPw(gw, 7, 14).subscribe(clientCount => { this.Sf7Pw14Count = clientCount;});
    this.authenticationService.getCountGwSfPw(gw, 9, 1).subscribe(clientCount => { this.Sf9Pw1Count = clientCount;});
    this.authenticationService.getCountGwSfPw(gw, 9, 7).subscribe(clientCount => { this.Sf9Pw7Count = clientCount;});
    this.authenticationService.getCountGwSfPw(gw, 9, 14).subscribe(clientCount => { this.Sf9Pw14Count = clientCount;});

  }

  getCountGwPw(gw) {
    this.authenticationService.getCountGwPw(gw, 1).subscribe(clientCount => { this.Pw1TotalCount = clientCount;});
    this.authenticationService.getCountGwPw(gw, 7).subscribe(clientCount => { this.Pw7TotalCount = clientCount;});
    this.authenticationService.getCountGwPw(gw, 14).subscribe(clientCount => { this.Pw14TotalCount = clientCount;});

  }

  getCountGwSf(gw) {
    this.authenticationService.getCountGwSf(gw, 7).subscribe(clientCount => { this.Sf7TotalCount = clientCount;});
    this.authenticationService.getCountGwSf(gw, 9).subscribe(clientCount => { this.Sf9TotalCount = clientCount;});
  }

}


