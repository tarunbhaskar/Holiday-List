import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { BaseService } from './base.service';

@Injectable()
export class HolidayListService extends BaseService {

  constructor(protected http: Http) {
  		super(http);
   }

}
