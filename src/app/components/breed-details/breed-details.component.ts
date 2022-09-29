import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreedServiceService } from 'src/app/services/breed-service.service';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.css']
})
export class BreedDetailsComponent implements OnInit {

  constructor(private _activatedRouter:ActivatedRoute , private _beerdService:BreedServiceService) { }

  public id:string="";
  public beerdDetails:any;
  public extraImages:any= [];
  public image:string = "";
  ngOnInit(): void {
    this._activatedRouter.params.subscribe(params => {
      this.id = params['id'];
      alert(this.id);
      this._beerdService.parms.userData.beerd_id = this.id;
      this.getBeerdDetails();
      this.getMoreImages();
   });
  }

  public array = [1,2,3,4,5]
  public convertToNumber(numb:string){
    console.log(numb);
    console.log(parseInt(numb));
    return parseInt(numb);
  }


  public getBeerdDetails(){
    this._beerdService.searchByBeerd().subscribe((res)=>{
      console.log(res);
      
      if(res['result']['success']){
        this.beerdDetails = res['result']['data'][0]['breeds'][0];
        this.image = res['result']['data'][0]['url'];

        console.log(this.image);
      }
    });
  }

  public getMoreImages(){
    this._beerdService.getMoreImages().subscribe((res)=>{
      console.log(res);
      if(res['result']['success']){
        this.extraImages = res['result']['data'];
      }else{

      }
    });
  }
}
