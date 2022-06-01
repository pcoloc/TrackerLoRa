import { Component, OnInit } from '@angular/core';
import { client, clients } from './client-data';

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.scss']
})
export class GatewaysComponent implements OnInit {
  client:client[];

  constructor() {
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

  ngOnInit(): void {

  }



}


