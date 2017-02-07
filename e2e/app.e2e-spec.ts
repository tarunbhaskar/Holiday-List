import { HolidayListPage } from './app.po';

describe('holiday-list App', function() {
  let page: HolidayListPage;

  beforeEach(() => {
    page = new HolidayListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
