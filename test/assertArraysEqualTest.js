const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('assertArraysEqual', () => {
  it('should return a false read when passed an array that is not the same', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2]));
  });
  it('should return positive when fed the same array', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
});
// assertArraysEqual([1, 2, 3], [1, 2]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);