import { Component, OnInit } from '@angular/core';
import { CanonicalService } from './shared/canonical.service';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  constructor(

    private canonicalService: CanonicalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    console.log("%cEspero que no estés intentando romper de alguna manera LoraTracker", "color:blue; font-size:20px; font-weight:bold;");
    console.log('%c ', 'font-size:400px; background:url(https://www.meme-arsenal.com/memes/8ffedeb2150f66928a2e4931dca8463d.jpg); background-size:100px 200px;');

  }
  ngOnInit() {
    this.canonicalService.setCanonicalURL();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
    .subscribe(() => {

      var rt = this.getChild(this.activatedRoute)

      rt.data.subscribe(data => {
        console.log(data);
        this.titleService.setTitle(data.title)})
    })
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }
}

