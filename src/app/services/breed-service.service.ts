import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedServiceService {

  public baseUrl:string = environment.apiUrl;

  constructor(private _httpClient: HttpClient) { }

public parms = {
  "metaData":{

  },
  "userData":{
    "beerd_id":"",
  }
}

  public getBreedCategory():Observable<any>{
    let url = this.baseUrl + 'get-category';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' , 'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT ,OPTIONS ' });

    return this._httpClient.get(url, {headers});
  }

  public searchByBeerd():Observable<any>{
    let url= this.baseUrl + 'search';
    return this._httpClient.post(url , this.parms);
  }

  public getMoreImages():Observable<any>{
    let url= this.baseUrl + 'more_images';
    return this._httpClient.post(url , this.parms);
  }

  public getPopular():Observable<any>{
    let url= this.baseUrl + 'get_popualr';
    return this._httpClient.get(url);
  }



  

  


}
