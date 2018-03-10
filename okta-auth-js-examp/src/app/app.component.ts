import { Component } from '@angular/core';
import { OktaAuthService } from './shared/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public oktaAuht: OktaAuthService){}
}
