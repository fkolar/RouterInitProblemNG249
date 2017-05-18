import { ProblemRouterPage } from './app.po';

describe('problem-router App', () => {
  let page: ProblemRouterPage;

  beforeEach(() => {
    page = new ProblemRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
