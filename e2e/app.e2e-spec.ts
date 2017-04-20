import { AngularPolymerStarterPage } from './app.po';

describe('angular-polymer-starter App', () => {
  let page: AngularPolymerStarterPage;

  beforeEach(() => {
    page = new AngularPolymerStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
