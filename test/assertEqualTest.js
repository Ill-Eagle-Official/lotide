const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('assertEqual', () => {
  it('should return false when fed two different strings', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it('should return positive when given two of the same number', () => {
    assert.strictEqual(assertEqual(1, 1));
  });
  it('should return positive when fed two of the same string', () => {
    assert.strictEqual(assertEqual('the same', 'the same'));
  });
  it('should return negative when fed two different numbers', () => {
    assert.strictEqual(assertEqual('same same', 'but different'));
  });
})

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual('the same', 'the same');
// assertEqual('same same', 'but different');
// assertEqual(5, 4);
