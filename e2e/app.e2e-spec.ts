import { PruebangularcliPage } from './app.po';

describe('pruebangularcli App', () => {
  let page: PruebangularcliPage;

  beforeEach(() => {
    page = new PruebangularcliPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
