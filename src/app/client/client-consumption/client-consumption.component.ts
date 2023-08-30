import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Consumption } from 'src/app/interfaces/consumption';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/shared.services';


@Component({
  selector: 'app-client-consumption',
  templateUrl: './client-consumption.component.html',
  styleUrls: ['./client-consumption.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  
})

export class ClientConsumptionComponent {

  allConsumptions: Consumption[] = [];

  constructor(private service:SharedService, private authService: AuthService){}

  ngOnInit() {
    this.getConsumption(this.client?.meterId);
    this.showAllConsumption();

  }

  get client() {
    return this.authService.client;
  }

  getConsumption(meterId: any) {
    this.service.getAllConsumption(meterId, this.authService.getToken()).subscribe((s: Consumption[]) => this.allConsumptions = s);
  }

  showAllConsumption(){
    var i:number;
    var consumptions: Consumption[] = []; 

    for(i = 0;i<this.allConsumptions.length;i++) {
      consumptions.push(this.allConsumptions[i]);
    }
    return consumptions;
  }


}
