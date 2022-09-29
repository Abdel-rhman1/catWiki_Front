import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { BreedServiceService } from 'src/app/services/breed-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public breedList:any = [];
  // public baseUrl:string = environment.apiUrl;
  constructor(private _breedService:BreedServiceService , private config: NgSelectConfig , 
    private _router:Router) { 
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    // set the bindValue to global config when you use the same 
    // bindValue in most of the place. 
    // You can also override bindValue for the specified template 
    // by defining `bindValue` as property
    // Eg : <ng-select bindValue="some-new-value"></ng-select>
    this.config.bindValue = 'value';

  }


  public getBreedDetails(id:any){
    console.log(id);
    this._router.navigate(['breed_details' , id]);
  }
  public selectedbreed:number=0;
  ngOnInit(): void {
    this.getBreed();
  }

  public getBreed(){
    this._breedService.getBreedCategory().subscribe((res)=>{
      if(res['result']['success']){
        this.breedList = res['result']['data']; 
      }
    });
  }

}
