import { Component,Input,OnInit } from '@angular/core';
import {LeafletService} from "../../../service/leaflet.service";
import { clients } from './client-data';
import { relations } from '../../../relaciones/relations-data';

export const DEFAULT_LAT = 36.834224508547145;
export const DEFAULT_LON =  -2.4592578294686978;
export const TITULO = 'Proyecto';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  implements OnInit {
  //este es el mapa que se muestra en la vista
  private map:any;
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() titulo: string = TITULO ;


  constructor(private mapService: LeafletService) {
  }
  //https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet
  //https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-popup-service
  //https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-marker-service
  ngOnInit(): void {
    if (this.mapService.L) {
      this.initMap();
    }
  }



  private initMap(): void {
    var iconRetinaUrl = 'assets/marker-router-icon-2x.png';
    var iconUrl = 'assets/marker-icon.png';
    var shadowUrl = 'assets/marker-shadow.png';
    var iconDefault: any;
    iconDefault = this.mapService.L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    this.mapService.L.Marker.prototype.options.icon = iconDefault;

    this.map =  this.mapService.L.map('map', {
      center: [this.lat, this.lon],
      attributionControl: false,
      zoom: 14
    });

    const tiles = this.mapService.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'miau'
    });

    for( let client of clients){
      let service = this.mapService.L;
      let marker = client.router ? service.marker([client.latitude, client.longitude]) : service.circleMarker([client.latitude, client.longitude]);
      marker.bindPopup(client.title);
      marker.addTo(this.map);
    }
    //From documentation http://leafletjs.com/reference.html#polyline
    // create a red polyline from an arrays of LatLng points
    for (let relation of relations){
      let line = this.mapService.L.polyline([[relation.latitude_emisor, relation.longitude_emisor], [relation.latitude_receptor, relation.longitude_receptor]], {color: relation.color});
      line.addTo(this.map);
      // zoom the map to the polyline
      //this.map.fitBounds(line.getBounds());
    }
    tiles.addTo(this.map);

// var latlngs = Array();

// //Get latlng from first marker
// latlngs.push(mark.getLatLng());

// //Get latlng from first marker
// latlngs.push(mark2.getLatLng());
   }

 }
