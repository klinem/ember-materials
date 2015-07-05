import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('md-table-header', 'Unit | Component | md table header', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it should correctly create the sortProperties', function(assert) {
  assert.expect(1);

  let targetObject = {
    sort: 'propA,-propB'
  };

  let component = this.subject({
    targetObject: targetObject
  });

  this.render();

  assert.deepEqual(component.get('sortProperties'), [{
    property: 'propA',
    isDescending: false,
  }, {
    property: 'propB',
    isDescending: true
  }]);
});
