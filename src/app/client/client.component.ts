import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SharedService } from '../shared.services'
import { Router} from '@angular/router';
import { EMPTY, catchError } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent {

  title = 'Electricity Billing';
  user: any;

  @Input()
  public sessionStorage = sessionStorage;

  ngOnInit(){
    this.user = {
      email: '',
      password: ''
    }
  }

  constructor(private service:SharedService, private router: Router, private location: Location){}

  loginClient(email: string, password: string){



    var val={
      email:email,
      password:password
    }
    console.log(val);
    this.service.authenticate(val).subscribe(data=>{
      if(data==null){
        console.log("Something wrong")
        window.location.reload();
      }
      else if(data!=null){
        this.sessionStorage.setItem("email",email);
        this.sessionStorage.setItem("token",data)
        console.log("UserData:",data);
        this.router.navigate(['login/main']);
        
      }

    },
    );

    catchError((err) => {
      console.log(err.status);
      if (err.status === 403) {
        console.log('Not found');
      }
      return EMPTY;
    })

  }

}
