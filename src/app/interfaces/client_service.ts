import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ClientService {
    private apiServerUrl = '';

    constructor(private http: HttpClient) {}

    public getAllClient(){
        return this.http.get<any>(`${this.apiServerUrl}/clients`)
    }

}