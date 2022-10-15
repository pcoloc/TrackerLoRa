import { Component, OnInit } from '@angular/core';
import {Product,TopSelling,} from './table-data';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-relaciones',
  templateUrl: './relaciones.component.html',
  styleUrls: ['./relaciones.component.scss']
})
export class RelacionesComponent implements OnInit {

  topSelling:Product[];
  totalRowCount;
  routerCount;
  gw;
  constructor(private authenticationService: AuthService) {
    this.topSelling=TopSelling;
    this.gw = "dragino-pac";
 }
  ngOnInit(): void {
    this.getCountTotalRows();
    this.getCountGw(this.gw);
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
  getCountGw(gw) {
    this.authenticationService.getCountGw(gw).subscribe(clientCount => { this.routerCount = clientCount;});
  }

}


