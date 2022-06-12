import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  routersCount;
  nodesCount;
  constructor(private authenticationService: AuthService) {

  }

  ngOnInit(): void {
    this.getRoutersCount();
    this.getNodesCount();
  }
  getRoutersCount() {
    this.authenticationService.getRoutersCount().subscribe(clientCount => { this.routersCount = clientCount; console.log(clientCount)});
  }
  getNodesCount() {
    this.authenticationService.getNodesCount().subscribe(clientCount => { this.nodesCount = clientCount; console.log(clientCount)});
  }
}
