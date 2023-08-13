import { Component, Input } from '@angular/core';
import { SharedService } from './shared.services'
import { Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electricity Billing';
  user: any;

  @Input()
  loginUserSession: boolean = false;
  public sessionStorage = sessionStorage;

   islogedin: boolean = true;



  ngOnInit(){
    this.user = {
      email: '',
      password: ''
    }
  }

  constructor(private service:SharedService, private router: Router){}


  getToken(){
    return sessionStorage.getItem('token');
  }

  isLogedIn() {
    const token = sessionStorage.getItem('token');
    if(token?.length != null){
      this.islogedin = false;
    }
    
    return this.islogedin;
 }

 logout(){
    return sessionStorage.removeItem('token');
 }
 

}
