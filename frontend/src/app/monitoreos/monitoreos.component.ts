import { Component, OnInit } from '@angular/core';
import { Ips, Ip} from './ip-data';
@Component({
  selector: 'app-monitoreos',
  templateUrl: './monitoreos.component.html',
  styleUrls: ['./monitoreos.component.scss']
})
export class MonitoreosComponent implements OnInit {
  ips:Ip[];
  constructor() {
    this.ips = Ips;
  }

  ngOnInit(): void {

  }

}
