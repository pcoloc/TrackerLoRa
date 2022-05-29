import { Component, OnInit } from '@angular/core';
import { relations } from '../relaciones/relations-data';
import { TopSelling, Product } from '../gateways/table-data';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  topSelling:Product[];

  constructor() {
    this.topSelling=TopSelling;

  }

  ngOnInit(): void {
  }

  private rankingDistancias(): void {
    var distancias = Array();
    for(let relation of relations){
      let distancia = this.getDistancia(relation.latitude_emisor, relation.longitude_emisor, relation.latitude_receptor, relation.longitude_receptor);
      distancias.push(distancia);
    }
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
}
