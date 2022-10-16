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

    this.Sf7Pw1Count = this.getCountGwSfPw('dragino-pac', 7, 1);
    this.Sf7Pw7Count = this.getCountGwSfPw('dragino-pac', 7, 7);
    this.Sf7Pw14Count = this.getCountGwSfPw('dragino-pac', 7, 14);
    this.Sf9Pw1Count = this.getCountGwSfPw('dragino-pac', 9, 1);
    this.Sf9Pw7Count = this.getCountGwSfPw('dragino-pac', 9, 7);
    this.Sf9Pw14Count = this.getCountGwSfPw('dragino-pac', 9, 14);

    this.Pw1TotalCount = this.getCountGwPw('dragino-pac', 1);
    this.Pw7TotalCount = this.getCountGwPw('dragino-pac', 7);
    this.Pw14TotalCount = this.getCountGwPw('dragino-pac', 14);

    this.Sf7TotalCount = this.getCountGwSf('dragino-pac', 7);
    this.Sf9TotalCount = this.getCountGwSf('dragino-pac', 9);
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

  getCountGwSfPw(gw, sf, pw) {
    return this.authenticationService.getCountGwSfPw(gw, sf, pw).subscribe();
  }

  getCountGwPw(gw, pw) {
    return this.authenticationService.getCountGwPw(gw, pw).subscribe();
  }

  getCountGwSf(gw, sf) {
    return this.authenticationService.getCountGwSf(gw, sf).subscribe();
  }

}


