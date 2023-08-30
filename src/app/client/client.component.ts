import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';;
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {

  title = 'Electricity Billing';

  @Input()
  public sessionStorage = sessionStorage;

  ngOnInit() {}

  constructor(private service: AuthService, private router: Router) { }

  loginClient(email: string, password: string) {

    var val = {
      email: email,
      password: password
    }

    this.service.authenticate(val)
      .subscribe({
        next: () => this.router.navigate(['login/main']),
        error: () => console.log('Authentication problem')
      });
  }
}
