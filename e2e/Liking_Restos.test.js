const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restos', ({ I }) => {
  I.see('Tidak ada Resto Favorite yang dipilih', '.posts-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada Resto Favorite yang dipilih', '.posts-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post-item__name a');
  const firstResto = locate('.post-item__name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.post-item__content');
  const likedRestoTitle = await I.grabTextFrom('.post-item__name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle.trim().replace(/\s+/g, ' '));
});

Scenario('unliking one resto', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.post-item__name a');
  let firstResto = locate('.post-item__name a').first();
  let firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');

  firstResto = locate('.post-item__name a').first();
  firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.see('Tidak ada Resto Favorite yang dipilih', '.posts-item__not__found');
});

Scenario('input new comment review', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.post-item__name a');
  let firstResto = locate('.post-item__name a').first();
  let firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  await I.fillField('#nama', 'Reviewer 1');

  await I.fillField('#isiReview', 'Bagus!!!');

  await I.click('#tambah');

  I.amOnPage('/');

  I.seeElement('.post-item__name a');
  firstResto = locate('.post-item__name a').first();
  firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  const reviewers = await I.grabNumberOfVisibleElements('.post-item__review');

  for (let i = 0; i < reviewers.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    const visibleName = await I.grabTextFrom(locate('.namaReview').at(i + 1));
    assert.strictEqual("Reviewer 1", visibleTitle);
  }
  
});
