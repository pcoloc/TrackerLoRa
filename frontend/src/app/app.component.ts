import { Component, OnInit } from '@angular/core';
import { CanonicalService } from './shared/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  constructor(

    private canonicalService: CanonicalService
  ) {
    console.log("%cEspero que no estés intentando romper de alguna manera LoraTracker", "color:red; font-size:20px; font-weight:bold;");
    console.log('%c ', 'font-size:400px; background:url(https://pics.me.me/codeit-google-until-youfinda-stackoverflow-answerwith-code-to-copy-paste-34126823.png) no-repeat;');

  }
  ngOnInit() {
    this.canonicalService.setCanonicalURL();
  }
}

