const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe('tail', () => {
  it('should return positive when the correct tail is given', () => {
    assert.strictEqual(assertEqual(tail([1, 2, 3]), 3));
  });
  it('should return false when the asserted value is not the correct answer', () => {
    assert.strictEqual(assertEqual(tail([1, 2, 3]), 2));
  });
});


// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");