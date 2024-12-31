import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string='http://localhost:8000/'


  constructor(private http:HttpClient) { }



  getAllEvent():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(this.apiUrl + "event_request" )
    
  }


  
}
