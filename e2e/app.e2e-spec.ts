import { BookingbashPage } from './app.po';

describe('bookingbash App', function() {
  let page: BookingbashPage;

  beforeEach(() => {
    page = new BookingbashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
