
const Page = require('./helpers/page');

let page;
beforeEach(async () => {
    page = await Page.build();
    await page.goto('http://localhost:3000');
});

afterEach(async () => {
    await page.close();
});
// 
// test.only('Test Numbers', () => {
//     const sum = 1 + 2;
//     expect(sum).toEqual(3);
// });

describe('Whel logged in', async () => {
  beforeEach(async () => {
      page = await Page.build();
      await page.click('a.btn-floating');
  });

  test('Can see blog create form', async () => {

    const label = await page.getContentOf('form label');

    expect(label).toEqual('Logout');
  });

  describe('And using valid inputs', async () => {
    test()
  });
  describe('And using invalid inputs', async () => {
    beforeEach(async() => {
      await page.click('form button');
    });
    test('the form shows an error message', async () => {
      const titleError = await page.getContentOf('.title .red-text');
      const contentError = await page.getContentOf('.content .red-text');

      expect(titleError).toEqual('error message');

    });
  });
})
