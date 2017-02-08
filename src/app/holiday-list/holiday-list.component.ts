import { Component, OnInit } from '@angular/core';
import { HolidayListService } from '../services/holiday-list.service';
import { SharedService } from '../services/shared.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {

private _holidayListTemp : any =[];
private key  = '';
private _holidayList : any = [];

private keys : any = [];

private url = 'https://holidayapi.com/v1/holidays?key=ce7c3840-eb78-423f-8308-31f8cbc41e13&country=US&year=2015';

  constructor(public holidayListService : HolidayListService , private router: Router , private sharedService : SharedService) { 



  }

  ngOnInit() {

  	this.holidayListService.fetchGet(this.url)
            .subscribe(resp => {this._holidayListTemp = resp.holidays;  
         
         this.keys = Object.keys(this._holidayListTemp);

         for (let i=0 ; i< this.keys.length ; i++){
         		if(this._holidayListTemp[this.keys[i]].length >1){
         			for( let j=0 ; j<this._holidayListTemp[this.keys[i]].length ; j++ )
         				this._holidayList.push(this._holidayListTemp[this.keys[i]][j]);
         		}else{
         		this._holidayList.push(this._holidayListTemp[this.keys[i]][0]);
         		}
         	
         }
            

               })
  };


  displayList(holiday){

  	this.sharedService.holidayDetail = holiday;
   this.router.navigate(['/holiday-detail']);

 

  };

 





}
