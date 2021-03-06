import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable
(
    {
        providedIn:'root'
    }    
)

export class ClienteServices{
    API_URI:string ="http://localhost:3000";
    constructor(private http:HttpClient){}

    getProd(){
        return this.http.get(`${this.API_URI}/cliente`)
    }
    createProd(){
        return this.http.get(`${this.API_URI}/cliente`)
    }
}