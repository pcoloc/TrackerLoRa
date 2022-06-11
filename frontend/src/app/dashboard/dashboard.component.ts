import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { lora } from '../shared/lora';
import { AuthService } from '../shared/auth.service';
import { UserWP } from '../shared/user';

const userWP: UserWP = {
  uuid: "",
  username: "",
  email: "",
  first_name: "",
  last_name:"",

}

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit, OnInit {
  subtitle: string ;
  firstName;
  constructor(private metaTagService: Meta, private tittle: Title,  private authenticationService: AuthService, private loraData : lora) {
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
    this.getCurrentUser();
  }
  ngAfterViewInit() { }
  api() {
    this.authenticationService.getApi().subscribe((data: lora) => this.loraData ={
      title : data.title,
      author: data.author,
      content: data.content,
      date: data.date,
      urlImage: data.urlImage,
    });
    console.log(this.loraData);
    //console.log(this.authenticationService.getApi());
  }
  getCurrentUser() {
    this.authenticationService.getUserProfile().subscribe(user => this.firstName = user.first_name);
  }
}
