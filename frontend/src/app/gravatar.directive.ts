import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { AuthService } from './shared/auth.service';
import { UserWP } from './shared/user';

@Directive({
  selector: '[appGravatar]'
})
export class GravatarDirective implements OnInit {
  currentUser: UserWP | undefined;
  @Input() set email(value: string) {

    this.updateGravatar(value);
  }


  constructor(private el: ElementRef, private renderer: Renderer2, private authenticationService: AuthService) {}

  ngOnInit(): void {
    this.getImageFromUSer();
    // if (this.el) {
    //   this.renderer.setAttribute(this.el.nativeElement, 'src', `//www.gravatar.com/avatar/`)
    // }
  }

  updateGravatar(email: string): void {
    if (!email || !this.el.nativeElement) {
      return;
    }

    const emailHash = Md5.hashStr(email.trim().toLowerCase());
    this.renderer.setAttribute(this.el.nativeElement, 'src', `//www.gravatar.com/avatar/${emailHash}?d=wavatar`);
  }
  getImageFromUSer() {
    this.authenticationService.getUserProfile().subscribe(user => this.updateGravatar(user.email));
  }
}
