import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-holiday-detail',
  templateUrl: './holiday-detail.component.html',
  styleUrls: ['./holiday-detail.component.css']
})
export class HolidayDetailComponent implements OnInit {

private _holidayDetail : any = [];

  constructor(public sharedService : SharedService , private router: Router) {
  	 
   }

  ngOnInit() {

  	 this._holidayDetail = this.sharedService.holidayDetail;

  	 
  };

  goBack(){
  this.router.navigate(['/holiday-list']);
  }

 

}
