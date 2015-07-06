import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

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

test('it should render add the `current` class to the active page', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{md-pagination page=1 pageCount=2}}
  `);

  assert.equal(this.$('.page').eq(0).hasClass('current'), true);
});

test('it should only render the max allowed links', function(assert) {
  assert.expect(1);

  this.set('page', 1);
  this.render(hbs`
    {{md-pagination page=page pageCount=20 maxLinks=5}}
  `);

  assert.equal(this.$('.page').length, 5);
});

test('it should render the correct next and previous links', function(assert) {
  assert.expect(2);

  this.set('showArrows', true);
  this.render(hbs`
    {{md-pagination page=1 pageCount=2 showArrows=showArrows}}
  `);

  assert.equal(this.$('.next').length, 1);
  assert.equal(this.$('.prev').length, 1);
});

test('it should be able to change pages by clicking the links', function(assert) {
  assert.expect(3);

  this.set('page', 1);
  this.set('actions', {
    setPage(page) {
      this.set('page', page);
    }
  });

  this.render(hbs`
    {{md-pagination page=page pageCount=4 showArrows=true onPage=(action "setPage")}}
  `);

  this.$('.page:contains(2)').click();
  assert.equal(this.get('page'), 2);

  this.$('.next').click();
  assert.equal(this.get('page'), 3);

  this.$('.prev').click();
  assert.equal(this.get('page'), 2);
});

test('it should show overflow indicators', function(assert) {
  assert.expect(5);

  this.set('page', 1);
  this.render(hbs`
    {{md-pagination page=page pageCount=10 maxLinks=4 overflow=true}}
  `);

  assert.equal(this.$('.overflow').length, 1);
  assert.equal(this.$('.overflow').index(), 5);

  this.set('page', 5);

  assert.equal(this.$('.overflow').length, 2);

  this.set('page', 10);

  assert.equal(this.$('.overflow').length, 1);
  assert.equal(this.$('.overflow').index(), 1);
});

test('it should show overflow page links', function(assert) {
  assert.expect(20);

  this.set('page', 1);
  this.render(hbs`
    {{md-pagination page=page pageCount=20 maxLinks=5 showArrows=false overflow=2}}
  `);

  const testMatrix = {
    1:  ['1', '2', '3', '4',  '5',  '…',  '19', '20'],
    2:  ['1', '2', '3', '4',  '5',  '…',  '19', '20'],
    3:  ['1', '2', '3', '4',  '5',  '…',  '19', '20'],
    4:  ['1', '2', '3', '4',  '5',  '6',  '…',  '19', '20'],
    5:  ['1', '2', '3', '4',  '5',  '6',  '7',  '…',  '19', '20'],
    6:  ['1', '2', '3', '4',  '5',  '6',  '7',  '8',  '…',  '19', '20'],
    7:  ['1', '2', '…', '5',  '6',  '7',  '8',  '9',  '…',  '19', '20'],
    8:  ['1', '2', '…', '6',  '7',  '8',  '9',  '10', '…',  '19', '20'],
    9:  ['1', '2', '…', '7',  '8',  '9',  '10', '11', '…',  '19', '20'],
    10: ['1', '2', '…', '8',  '9',  '10', '11', '12', '…',  '19', '20'],
    11: ['1', '2', '…', '9',  '10', '11', '12', '13', '…',  '19', '20'],
    12: ['1', '2', '…', '10', '11', '12', '13', '14', '…',  '19', '20'],
    13: ['1', '2', '…', '11', '12', '13', '14', '15', '…',  '19', '20'],
    14: ['1', '2', '…', '12', '13', '14', '15', '16', '…',  '19', '20'],
    15: ['1', '2', '…', '13', '14', '15', '16', '17', '18', '19', '20'],
    16: ['1', '2', '…', '14', '15', '16', '17', '18', '19', '20'],
    17: ['1', '2', '…', '15', '16', '17', '18', '19', '20'],
    18: ['1', '2', '…', '16', '17', '18', '19', '20'],
    19: ['1', '2', '…', '16', '17', '18', '19', '20'],
    20: ['1', '2', '…', '16', '17', '18', '19', '20'],
  };

  for(var k in testMatrix) {
    this.set('page', k);

    assert.deepEqual(getLinks(this.$('.md-pagination')), testMatrix[k]);
  }

  // assert.deepEqual(getLinks(this.$('.md-pagination')), ['1', '2', '3', '4', '5', '…', '19', '20']);
  //
  // this.set('page', 5);
  // assert.deepEqual(getLinks(this.$('.md-pagination')), ['1', '2', '3', '4', '5', '6', '7', '…', '19', '20']);
  //
  // this.set('page', 6);
  // assert.deepEqual(getLinks(this.$('.md-pagination')), ['1', '2', '3', '4', '5', '6', '7', '8', '…', '19', '20']);
  //
  // this.set('page', 7);
  // assert.deepEqual(getLinks(this.$('.md-pagination')), ['1', '2', '…', '5', '6', '7', '8', '9', '…', '19', '20']);
  //
  // this.set('page', 10);
  // assert.deepEqual(getLinks(this.$('.md-pagination')), ['1', '2', '…', '8', '9', '10', '11', '12', '…', '19', '20']);
  //
  // this.set('page', 14);
  // assert.deepEqual(getLinks(this.$('.md-pagination')), ['1', '2', '…', '12', '13', '14', '15', '16', '…', '19', '20']);
  //
  // this.set('page', 15);
  // assert.deepEqual(getLinks(this.$('.md-pagination')), ['1', '2', '…', '13', '14', '15', '16', '17', '18', '19', '20']);
  //
  // this.set('page', 16);
  // assert.deepEqual(getLinks(this.$('.md-pagination')), ['1', '2', '…', '14', '15', '16', '17', '18', '19', '20']);
  //
  // this.set('page', 18);
  // assert.deepEqual(getLinks(this.$('.md-pagination')), ['1', '2', '…', '16', '17', '18', '19', '20']);
  //
  // this.set('page', 20);
  // assert.deepEqual(getLinks(this.$('.md-pagination')), ['1', '2', '…', '16', '17', '18', '19', '20']);
});


function getLinks($cont, expected) {
  let links = [];

  $cont.children().each((i, block) => {
    links.push(Ember.$(block).text().trim());
  });

  return links;
}
