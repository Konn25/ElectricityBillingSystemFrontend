import { HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Client } from 'src/app/clients/client';
import { SharedService } from 'src/app/shared.services';

@Component({
  selector: 'app-client-consumption',
  templateUrl: './client-consumption.component.html',
  styleUrls: ['./client-consumption.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientConsumptionComponent {
  clientData!: any;
  clientEmail = sessionStorage.getItem('email');
  token = sessionStorage.getItem('token');
  header : any;
  options: any;
  clientMeterId: any;

  clientAllConsumption: any;

  constructor(private service:SharedService){

    this.header = new HttpHeaders({
      "Authorization": "Bearer " + this.token,
   }),
    this.options = { headers: this.header };

    this.service.findClientByEmail(this.clientEmail,this.options).subscribe((s) => this.clientData = s ); 
    
  }

  ngOnInit() {
  }

  getConsumptions(meterId: number) {
    this.service.getAllConsumption(meterId,this.options).subscribe((s) => this.clientAllConsumption = s);
  }

  getClientMeterId(){
    this.clientMeterId=this.clientData.meterId;
    return this.clientMeterId;
  }

  getData(){
    this.getConsumptions(this.getClientMeterId())
  }

  getAllConsumption(){
    var i:number;
    var consumptions: Client[]; 
    consumptions = [];
    this.getData();
    for(i = 0;i<this.clientAllConsumption.length;i++) {
      consumptions.push(this.clientAllConsumption[i]);
    }

    return consumptions;
  }

}
