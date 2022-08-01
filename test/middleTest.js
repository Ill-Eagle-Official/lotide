const eqArrays = require('../eqArray');

const assertArraysEqual = require('../assertArraysEqual');

const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([4, 5, 6]), [5]);
assertArraysEqual(middle([1, 2, 3, 4]), [5]);