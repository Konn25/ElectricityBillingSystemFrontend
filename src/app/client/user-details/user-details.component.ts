import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  constructor(private authService: AuthService) { }

  get client() {
    return this.authService.client;
  }

  get clientQRCode() {

    return this.client ? `Name: ${this.client.name}\nEmail: ${this.client.email}\nMeter Id: ${this.client.meterId}\nPostal code: ${this.client.postalCode}\nCity: ${this.client.city}\nStreet: ${this.client.street}\nHouse number: ${this.client.houseNumber}` : "";
  }
}
