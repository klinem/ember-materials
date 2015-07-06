import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('md-table-th', 'Integration | Component | md table th', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  integration: true
});

test('it should be able to use a block or the `text` attribute', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{md-table-th text="Cell A"}}
    {{#md-table-th}}
      Cell B
    {{/md-table-th}}
  `);

  assert.equal(this.$('th:first-child').text().trim(), 'Cell A');
  assert.equal(this.$('th:last-child').text().trim(), 'Cell B');
});

test('it should add a sorted and descending class', function(assert) {
  assert.expect(3);

  this.set('sort', 'propA');
  this.render(hbs`
    {{#md-table-header sorting=sort}}
      {{md-table-th sortBy="propA"}}
    {{/md-table-header}}
  `);

  let $cell = this.$('th').eq(0);

  assert.equal($cell.hasClass('md-sorted'), true);
  assert.equal($cell.hasClass('md-descending'), false);

  this.set('sort', '-propA');

  assert.equal($cell.hasClass('md-descending'), true);
});

test('should send the click event up', function(assert) {
  assert.expect(3);

  this.set('sort', "");
  this.set('actions', {
    onSort(props) {
      let sorting = props.map(x => {
        return `${x.isDescending ? '-' : ''}${x.property}`;
      }).join(',');

      this.set('sort', sorting);
    }
  });

  this.render(hbs`
    {{#md-table-header sorting=sort onSort=(action "onSort")}}
      {{md-table-th sortBy="propA"}}
    {{/md-table-header}}
  `);

  let $cell = this.$('th').eq(0);

  $cell.click();

  assert.equal($cell.hasClass('md-sorted'), true);
  assert.equal($cell.hasClass('md-descending'), false);

  $cell.click();

  assert.equal($cell.hasClass('md-descending'), true);
});
