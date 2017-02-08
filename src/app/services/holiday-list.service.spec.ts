/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HolidayListService } from './holiday-list.service';

describe('HolidayListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolidayListService]
    });
  });

  it('should ...', inject([HolidayListService], (service: HolidayListService) => {
    expect(service).toBeTruthy();
  }));
});
