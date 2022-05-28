import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit, OnInit {
  subtitle: string;
  constructor(private metaTagService: Meta) {
    this.subtitle = 'This is some text within a card block.';
  }

  ngOnInit() {
    this.metaTagService.addTags([
      {
        name: 'dashboard',
        content: 'TrackerLoRa is a web application for tracking LoRaWAN devices.',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Paco López' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2022-05-28', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }
  ngAfterViewInit() { }
}
