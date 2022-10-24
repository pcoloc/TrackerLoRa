import { Component,Input,OnInit } from '@angular/core';
import {LeafletService} from "../../../service/leaflet.service";
import { relations } from '../../../relaciones/relations-data';
import { AuthService } from 'src/app/shared/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddLocationComponent } from './add-location/add-location.component';
export const DEFAULT_LAT = 36.834224508547145;
export const DEFAULT_LON =  -2.4592578294686978;
export const TITULO = 'Proyecto';

interface Gateway {
  value: string;
  viewValue: string;
}

interface SpreadingFactor {
  value: number;
  viewValue: string;
}

interface Power {
  value: number;
  viewValue: string;
}


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
  gw = 'dragino-pac';
  sf = 7;
  pw = 7;
  counter = 0;
  gateways: Gateway[] = [
    {value: 'dragino-pac', viewValue: 'Dragino'},
    {value: 'paco96routermikro', viewValue: 'Mikrotik'},
  ];

  spreadingFactors: SpreadingFactor[] = [
    {value: 7, viewValue: 'SF7'},
    {value: 9, viewValue: 'SF9'},
  ];

  powers: Power[] = [
    {value: 1, viewValue: '1mW'},
    {value: 7, viewValue: '7mW'},
    {value: 14, viewValue: '14mW'},
  ];

  onChangeGw(value) {
    this.gw = value;
  }

  onChangeSf(value){
    this.sf = value;
  }

  onChangePw(value) {
    this.pw = value;
    if (this.mapService.L) {
      this.initMap();
      this.callMap();
    }
  }

  constructor(private mapService: LeafletService, private authservice: AuthService,  public dialog: MatDialog) {
  }
  //https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet
  //https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-popup-service
  //https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-marker-service

  async ngOnInit(): Promise<void> {
    // if (this.mapService.L) {
    //   this.initMap();
    //   this.callMap();
    // }
  }

  async callMap(){

      this.authservice.getGateways().subscribe(
        (data: any) => {
          for(let router of data){
            let latitud = router.lastLocation.latitud.replace(",", ".");
            let longitud = router.lastLocation.longitud.replace(",", ".");
            let service = this.mapService.L;
              let marker = router.router ? service.marker([latitud, longitud]) : service.circleMarker([router.latitude, router.longitude]);
              marker.bindPopup("<b>" + router.name + "</b><br>" + "<b>" + router.description + "</b><br> <b>Last Ubi: </b>" + router.lastLocation.date);
              marker.addTo(this.map);
          }
        }
      );
      this.authservice.getNodes().subscribe(
        (data: any) => {
          for(let node of data){
            let latitud = node.lastLocation.latitud.replace(",", ".");
            let longitud = node.lastLocation.longitud.replace(",", ".");
            let service = this.mapService.L;
              let marker = !node.router ? service.marker([latitud, longitud]) : service.circleMarker([latitud, longitud]);
              marker.bindPopup("<b>" + node.name + "</b><br>" + "<b>" + node.description + "</b><br> <b>Last Ubi: </b>" + node.lastLocation.date);
              marker.addTo(this.map);
              marker.removeItem(this.map);
          }
        }
      );
      this.getUbis();

  }

  async getUbis(){
    (await this.authservice.getTtnMapper(this.gw, this.sf, this.pw)).subscribe(
      (data: any) => {
        console.log("paso")

        for(let ttn of data){
          let latitud = ttn?.latitud; //.replace(",", ".");
          let longitud = ttn?.longitud; //.replace(",", ".");
          let service = this.mapService.L;
          console.log(ttn.gateway_1?.rssi)
          let color = this.getColor(ttn.gateway_1?.rssi);
            let marker = service.circleMarker([latitud, longitud]);
            marker.setStyle({color: color});
            marker.bindPopup("<b>Gateway: </b>" + ttn.gateway_1?.name + "</b><br> <b>Cliente: </b>" + ttn?.cliente + "</b><br> <b>RX: </b>" + ttn?.potencia + "dBm</b><br> <b>RSSI: </b>" + ttn?.gateway_1.rssi + "dB</b><br> <b>SNR: </b>" + ttn.gateway_1?.snr + "dB</b><br> <b>spreading_factor: </b>" + ttn?.sf + "<br> <b>Metros: </b>" + ttn?.gateway_1.metros);
            marker.addTo(this.map);
            this.counter ++;
        }
      }
    );
  }
  //a function to get color based on the value of the node RSSI
  private getColor(rssi: number) {
    if(rssi < -120){
      return '#03ffff';
    }
    else if (rssi < -110) {
      return '#ffff00';
    }else if (rssi < -100) {
        return '#ff7f00';
    } else if (rssi < -90) {
        return '#ff0000';
    } else if (rssi < -80) {
      return '#ff0000';
    } else if (rssi < -70) {
      return '#ff0000';
    } else if (rssi < -60) {
      return '#d1123f';
    } else if (rssi < -50) {
      return '#830623';
    } else if (rssi < 0) {
      return '#830623';
    }
    return '#0000ff';
  }
//   function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// map.on('click', onMapClick);


  private initMap(): void {
    let iconRetinaUrl = 'assets/marker-router-icon-2x.png';
    let iconUrl = 'assets/marker-router-icon-2x.png';
    let shadowUrl = 'assets/marker-shadow.png';
    let iconDefault: any;
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

    this.getMap();

    const tiles = this.mapService.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'miau'
    });


    //  for(let router of this.gateway){
    //   let service = this.mapService.L;
    //   let marker = router.router ? service.marker([router.latitude, router.longitude]) : service.circleMarker([router.latitude, router.longitude]);
    //   marker.bindPopup(router.title);
    //   marker.addTo(this.map);
    // }
    //From documentation http://leafletjs.com/reference.html#polyline
    // create a red polyline from an arrays of LatLng points
    // for (let relation of relations){
    //   let line = this.mapService.L.polyline([[relation.latitude_emisor, relation.longitude_emisor], [relation.latitude_receptor, relation.longitude_receptor]], {color: relation.color});
    //   line.addTo(this.map);
    //   // zoom the map to the polyline
    //   //this.map.fitBounds(line.getBounds());
    //}
    tiles.addTo(this.map);

// var latlngs = Array();

// //Get latlng from first marker
// latlngs.push(mark.getLatLng());

// //Get latlng from first marker
// latlngs.push(mark2.getLatLng());
   }

   private getMap(){
    this.map =  this.mapService.L.map('map', {
      center: [this.lat, this.lon],
      attributionControl: false,
      zoom: 14
    });
  }

   openDialog(): void {
    const dialogRef = this.dialog.open(AddLocationComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


 }
