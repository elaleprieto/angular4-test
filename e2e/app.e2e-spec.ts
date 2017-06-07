import { Angular4TestPage } from './app.po';

describe('angular4-test App', () => {
  let page: Angular4TestPage;

  beforeEach(() => {
    page = new Angular4TestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
