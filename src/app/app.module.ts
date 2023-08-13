import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientComponent } from './client/client.component';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { HttpClientModule,HttpClientXsrfModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { UserMainPageComponent } from './client/user-main-page/user-main-page.component';

import { AuthService } from './auth/auth.service'
import { AuthGuard } from './auth/auth.guard';
import { UserDetailsComponent } from './client/user-details/user-details.component'
import { QRCodeModule } from 'angularx-qrcode';
import { ClientBillingsComponent } from './client/client-billings/client-billings.component';
import { ClientConsumptionComponent } from './client/client-consumption/client-consumption.component';



const routes: Routes = [

  {path:'login', component:ClientComponent},
  {path:'login/main', component:UserMainPageComponent, canActivate:[AuthGuard]},
  {path:'details', component:UserDetailsComponent, canActivate:[AuthGuard]},
  {path:'billings', component:ClientBillingsComponent, canActivate:[AuthGuard]},
  {path:'consumptions', component:ClientConsumptionComponent, canActivate:[AuthGuard]},
  
];


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    UserMainPageComponent,
    UserDetailsComponent,
    ClientBillingsComponent,
    ClientConsumptionComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFTOKEN',
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    QRCodeModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
