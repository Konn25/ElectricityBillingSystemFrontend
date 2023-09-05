import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Payment } from 'src/app/interfaces/payment';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/shared.services';

@Component({
  selector: 'app-client-billings',
  templateUrl: './client-billings.component.html',
  styleUrls: ['./client-billings.component.css'],
})
export class ClientBillingsComponent {

  clientAllPayments: Payment[] = [];

  constructor(private service:SharedService, private authService: AuthService){}

  ngOnInit() {
    this.getPayments(this.client?.id);
    this.showAllPayments();
  }

  get client() {
    return this.authService.client;
  }

  getPayments(clientId: any) {
   this.service.getClientAllPayment(clientId, this.authService.getToken()).subscribe((s: Payment[]) => this.clientAllPayments = s);
  }

  showAllPayments(){
    var i:number;
    var payments: Payment[]; 

    payments = [];
    for(i = 0;i<this.clientAllPayments!.length;i++) {
      payments.push(this.clientAllPayments![i]);
    }
    return payments;
  }

  getMonthNames(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'short' });
  
    const month = formatter.format(date);
  
    return `${month}`;
  }
}
