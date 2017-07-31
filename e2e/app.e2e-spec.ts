import { OrthoScoringPage } from './app.po';

describe('ortho-scoring App', () => {
  let page: OrthoScoringPage;

  beforeEach(() => {
    page = new OrthoScoringPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
