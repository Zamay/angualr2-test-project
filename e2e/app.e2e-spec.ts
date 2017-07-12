import { Angualr2TestProjectPage } from './app.po';

describe('angualr2-test-project App', () => {
  let page: Angualr2TestProjectPage;

  beforeEach(() => {
    page = new Angualr2TestProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
