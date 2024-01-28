import assert from 'assert/strict';
import test from 'node:test';
import { sum } from '../src/index'

test('sum', () => {
  assert.strictEqual(sum(1, 2), 3)
});


