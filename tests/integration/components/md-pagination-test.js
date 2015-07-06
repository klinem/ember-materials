import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('md-pagination', 'Integration | Component | md pagination', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  integration: true
});

test('it should determine the pagination type class', function(assert) {
  assert.expect(2);

  this.set('type', 'mini');
  this.render(hbs`
    {{md-pagination type=type}}
  `);

  assert.equal(this.$('.md-pagination').hasClass('pagination-mini'), true);

  this.set('type', null);

  assert.equal(this.$('.md-pagination').hasClass('pagination-mini'), false);
});

test('it should render the pagination info for the mini pager', function(assert) {
  assert.expect(2);

  this.set('page', 1);
  this.set('itemCount', 30);
  this.set('perPage', 20);

  this.render(hbs`
    {{md-pagination type="mini" itemCount=itemCount page=page perPage=perPage}}
  `);

  assert.equal(this.$('.pagination-info').text().trim(), '1-20 of 30');

  this.set('page', 2);

  assert.equal(this.$('.pagination-info').text().trim(), '21-30 of 30');
});

test('it should disable the previous link for the mini pager if first page', function(assert) {
  assert.expect(2);

  this.set('page', 1);

  this.render(hbs`
    {{md-pagination type="mini" page=page}}
  `);


  assert.equal(this.$('.md-pagination .prev').hasClass('md-disabled'), true);

  this.set('page', 2);

  assert.equal(this.$('.md-pagination .prev').hasClass('md-disabled'), false);
});

test('it should disable the next link for the mini pager if last page', function(assert) {
  assert.expect(2);

  this.set('page', 1);

  this.render(hbs`
    {{md-pagination type="mini" page=page pageCount=2}}
  `);

  assert.equal(this.$('.md-pagination .next').hasClass('md-disabled'), false);

  this.set('page', 2);

  assert.equal(this.$('.md-pagination .next').hasClass('md-disabled'), true);
});

test('it should be able to pass an `onPage` action to the pager', function(assert) {
  assert.expect(4);

  this.set('page', 1);
  this.set('actions', {
    changePage(page) {
      this.set('page', page);
    }
  });

  this.render(hbs`
    {{md-pagination type="mini" page=page pageCount=2 onPage=(action "changePage")}}
  `);

  this.$('.next').click();
  assert.equal(this.get('page'), 2);

  this.$('.next').click();
  assert.equal(this.get('page'), 2);

  this.$('.prev').click();
  assert.equal(this.get('page'), 1);

  this.$('.prev').click();
  assert.equal(this.get('page'), 1);
});

test('it should render page numbers for the full pager', function(assert) {
  assert.expect(1);

  this.set('page', 1);
  this.render(hbs`
    {{md-pagination page=page pageCount=5}}
  `);

  assert.equal(this.$('.page').length, 5);
});

test('it should only render the non-current page as links', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{md-pagination page=1 pageCount=5}}
  `);

  let $pages = this.$('.page');

  assert.equal($pages[0].tagName, 'SPAN');
  assert.equal($pages[1].tagName, 'A');
});

test('it should only render the max allowed links', function(assert) {
  assert.expect(1);

  this.set('page', 1);
  this.render(hbs`
    {{md-pagination page=page pageCount=20 maxLinks=5}}
  `);

  assert.equal(this.$('.page').length, 5);
});
