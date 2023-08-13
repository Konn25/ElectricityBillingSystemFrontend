import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EMPTY, Observable, Subject, catchError, throwError} from 'rxjs';
import { Client } from './clients/client';

@Injectable({
    providedIn: 'root'
  })

export class SharedService{
    readonly APIUrl = "http://localhost:8080/v1"
    onChange: Subject<string> = new Subject<string>();


    constructor(private http:HttpClient){
        window.addEventListener("storage",(storageEvent: StorageEvent) => this.onChange.next(storageEvent.key ?? ''), false);
    }

    //AUTHENTICATION
    authenticate(val: any){
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});

        return this.http.post(this.APIUrl+"/authenticate", val, {headers:reqHeader, responseType: 'text'}).pipe(
        
            catchError((err) => {
                console.log(err);
                return EMPTY;  
            })
          )
    }

    //CLIENT
    getAllUser(){
        return this.http.get(this.APIUrl+"/clients");
    }

    createClient(val: any){
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});

        return this.http.post(this.APIUrl+"createclient",val, {headers:reqHeader, responseType: 'text'});
    }

    getQRCode(clientId: number, options:any):Observable<any>{
        return this.http.get(this.APIUrl+"/clientdata/"+clientId, options);
    }

    getClientMeter(clientId: number){
        return this.http.get(this.APIUrl+"/client/meter/"+clientId);
    }

    findClientById(clientId: number){
        return this.http.get(this.APIUrl+"/client/find/"+clientId);
    }

    findClientByEmail(clientEmail: any, options: any):Observable<ArrayBuffer>{
        return this.http.get(this.APIUrl+"/client/data/"+clientEmail, options);
    }

    findClientByEmail2(clientEmail: any, options: any){
        return this.http.get(this.APIUrl+"/client/data/"+clientEmail, options);
    }

    //Consumption

    getAllConsumption(meterId: number,options: any){
        return this.http.get(this.APIUrl+"/consumptions/"+meterId, options);
    }

    checkConsumptionByYearAndMonth(meterId: number, year: number, month: number, options: any){
        return this.http.get(this.APIUrl+"/consumptions/"+meterId+"/"+year+"/"+month, options);
    }

    createNewConsumption(clientId: number, val: any, options: any){
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', options});

        return this.http.post(this.APIUrl+"/consumption/"+clientId+"/create",val, {headers:reqHeader, responseType: 'text'});
    }

    getConsumptionByYear(meterId: number, year: number, options: any){
        return this.http.get(this.APIUrl+"/consumption/"+meterId+"/"+year, options);
    }

    getAllConsumptionByYear(meterId: number, year: number, options: any){
        return this.http.get(this.APIUrl+"/consumption/allconsumption/"+meterId+"/"+year, options);
    }

    //Payments

    getClientAllPayment(clientId: any, options: any){
        return this.http.get(this.APIUrl+"/payment/all/"+clientId, options);
    }


}