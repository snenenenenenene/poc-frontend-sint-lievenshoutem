import { module, test } from 'qunit';

import { setupTest } from 'frontend-burgernabije-besluitendatabank/tests/helpers';

module('Unit | Model | municipality', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('municipality', {});
    assert.ok(model);
  });
});