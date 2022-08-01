const eqArray = require('./eqArray');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArray(arr1, arr2) === true) {
    console.log("Yeah, that's some equal stuff right there.")
  } else {
    console.log("Nope, that ain't equal.")
  }
}

module.exports = assertArraysEqual;