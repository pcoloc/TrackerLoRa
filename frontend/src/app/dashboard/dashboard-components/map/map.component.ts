import { Component,Input,OnInit } from '@angular/core';
import {LeafletService} from "../../../service/leaflet.service";
import { relations } from '../../../relaciones/relations-data';
import { AuthService } from 'src/app/shared/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddLocationComponent } from './add-location/add-location.component';
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


  constructor(private mapService: LeafletService, private authservice: AuthService,  public dialog: MatDialog) {
  }
  //https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet
  //https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-popup-service
  //https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-marker-service

  async ngOnInit(): Promise<void> {
    if (this.mapService.L) {
      this.initMap();
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
          }
        }
      );

      (await this.authservice.getTtnMapper()).subscribe(
        (data: any) => {
          console.log("paso")
          console.log(data)
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
          }
        }
      );
    }
  }

  //a function to get color based on the value of the node RSSI
  private getColor(rssi: number) {
    if(rssi < -120){
      return '#f23d30';
    }
    else if (rssi < -110) {
      return '#f00722';
    }else if (rssi < -100) {
        return '#0000ff';
    } else if (rssi < -90) {
        return '#d62060';
    } else if (rssi < -80) {
      return '#276670';
    } else if (rssi < -70) {
      return '#15abc2';
    } else if (rssi < -60) {
      return '#196122';
    } else if (rssi < -50) {
      return '#0fa821';
    } else if (rssi < 0) {
      return '#12ff2e';
    }
    return '#ff0000';
  }
//   function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// map.on('click', onMapClick);


  private initMap(): void {
    var iconRetinaUrl = 'assets/marker-router-icon-2x.png';
    var iconUrl = 'assets/marker-router-icon-2x.png';
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

    //  for(let router of this.gateway){
    //   let service = this.mapService.L;
    //   let marker = router.router ? service.marker([router.latitude, router.longitude]) : service.circleMarker([router.latitude, router.longitude]);
    //   marker.bindPopup(router.title);
    //   marker.addTo(this.map);
    // }
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
