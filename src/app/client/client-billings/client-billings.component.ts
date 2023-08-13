import { HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Payment } from 'src/app/clients/payment';
import { SharedService } from 'src/app/shared.services';

@Component({
  selector: 'app-client-billings',
  templateUrl: './client-billings.component.html',
  styleUrls: ['./client-billings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientBillingsComponent {
  clientData!: any;
  clientEmail = sessionStorage.getItem('email');
  token = sessionStorage.getItem('token');
  header : any;
  options: any;
  clientAllPayments:any;

  clientId:any;

  constructor(private service:SharedService){

    this.header = new HttpHeaders({
      "Authorization": "Bearer " + this.token,
   }),
    this.options = { headers: this.header };

    this.service.findClientByEmail(this.clientEmail,this.options).subscribe((s) => this.clientData = s ); 
    
  }

  ngOnInit() {
  }

  async getPayments(clientId: number) {
    this.service.getClientAllPayment(clientId,this.options).subscribe((s) => this.clientAllPayments = s);
  }

  getClientId(){
    this.clientId=this.clientData.id;
    return this.clientId;
  }

  getAllPayments(){
    this.getPayments(this.getClientId());
  }

  showAllPayments(){
    var i:number;
    var payments: Payment[]; 
    payments = [];
    this.getAllPayments();
    for(i = 0;i<this.clientAllPayments.length;i++) {
      payments.push(this.clientAllPayments[i]);
    }

    return payments;
  }

}
