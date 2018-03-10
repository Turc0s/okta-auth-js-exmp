import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '../shared/service.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private oktaAuth: OktaAuthService) { 
    oktaAuth.handleAuthentication();
   }

  ngOnInit() {
  }

}
