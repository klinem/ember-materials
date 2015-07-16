import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('md-link-button', 'Integration | Component | md link button', {
  integration: true
});

test('it renders correctly', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{md-link-button "Index" "index"}}
  `);

  let $link = this.$('a');

  assert.ok($link.hasClass('md-btn'));
  assert.ok($link.text().indexOf('Index') !== -1,
   'It shows the correct link title');
});

test('it should render with a block', function(assert) {
  this.render(hbs`
    {{#md-link-button "index"}}
      Block
    {{/md-link-button}}
  `);

  assert.ok(this.$('a').text().indexOf('Block') !== -1);
});
