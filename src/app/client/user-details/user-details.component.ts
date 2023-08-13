import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  clientData:any;
  clientEmail = sessionStorage.getItem('email');
  token = sessionStorage.getItem('token');
  header : any;
  options: any;
  qrcode: any;

  constructor(private service:SharedService){}

  ngOnInit() {

    this.header = new HttpHeaders({
      "Authorization": "Bearer " + this.token,
   }),
   this.options = { headers: this.header };


   this.service.findClientByEmail(this.clientEmail,this.options).subscribe((s) => this.clientData = s);  
   this.service.getQRCode(this.clientData['id'],this.options).subscribe((s) => this.qrcode=s);
   
  }

  getClientName(){
    return this.clientData['name'];
  }

  getClientPostalCode(){
    return this.clientData['postalCode'];
  }

  getClientElectricityMeter(){
    return this.clientData['meterId'];
  }

  getClientEmail(){
    return this.clientData['email'];
  }

  getClientCity(){
    return this.clientData['city'];
  }

  getClientStreet(){
    return this.clientData['street'];
  }

  getClientHouseNumber(){
    return this.clientData['houseNumber'];
  }

  getClientQRCode(){
      var clientDetails = "Name: "+this.clientData['name'] +"\nEmail: "+this.clientData['email']+"\nMeter Id: "+this.clientData['meterId']+"\nPostal code: "+this.clientData['postalCode']+
      "\nCity: "+this.clientData['city']+"\nStreet: "+this.clientData['street']+"\nHouse number: "+this.clientData['houseNumber']
      
    return clientDetails;
  }
}
