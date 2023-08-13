import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.services';

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.css']
})
export class UserMainPageComponent {

  clientData:any;
  clientEmail = sessionStorage.getItem('email');
  token = sessionStorage.getItem('token');
  header : any;
  options: any;
  
  constructor(private service:SharedService){}

  ngOnInit() {

    this.header = new HttpHeaders({
      "Authorization": "Bearer " + this.token,
   }),
   this.options = { headers: this.header };


   this.service.findClientByEmail(this.clientEmail,this.options).subscribe((s) => this.clientData = s);   
  }

  foundClient(){  
    return this.clientData;
  }
  

  getClientName(){

    return this.clientData['name'];
  }


}
