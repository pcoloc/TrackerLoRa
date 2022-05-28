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
  ) { }
  ngOnInit() {

    this.canonicalService.setCanonicalURL();
  }
}

