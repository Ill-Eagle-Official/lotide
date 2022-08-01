const assert = require('chai').assert;
const eqArrays = require('../eqArray');

const assertArraysEqual = require('../assertArraysEqual');

const middle = require('../middle');

describe('middle', () => {
  it('should return positive when a signel correct number is returned', () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
  });
  it('should return negative when returning one number in an even-numbered array', () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [5]));
  });
  it('should return two numbers when given an even-numbered array', () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
  });
});

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([4, 5, 6]), [5]);
// assertArraysEqual(middle([1, 2, 3, 4]), [5]);