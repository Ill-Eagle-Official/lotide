const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArray = require('../eqArray');

describe('eqArrays', () => {
  it('should return true when given two of the same array', () => {
    assert.strictEqual(assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true));
  });
  it('should return negative when fed two different arrays', () => {
    assert.strictEqual(assertEqual(eqArray([1, 2, 3], [3, 2, 1]), false));
  });
});

