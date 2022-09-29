import { Component, OnInit } from '@angular/core';
import { BreedServiceService } from 'src/app/services/breed-service.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  public Populared_List:any = [];
  constructor(private _beerdService:BreedServiceService) { }

  ngOnInit(): void {
    this.getPopular();
  }


  public getPopular(){
    this._beerdService.getPopular().subscribe((res)=>{
      console.log(res);
      if(res['result']['success']){
        this.Populared_List = res['result']['data']['list'];
      }
    })
  }

}
