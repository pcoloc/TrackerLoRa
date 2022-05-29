import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
declare var require: any

@Injectable({
  providedIn: 'root'
})


@Injectable()
export class LeafletService {

  public L:any = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      this.L = require('leaflet');
    }
  }

}
