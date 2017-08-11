import { App4PostsPage } from './app.po';

describe('app4-posts App', () => {
  let page: App4PostsPage;

  beforeEach(() => {
    page = new App4PostsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
