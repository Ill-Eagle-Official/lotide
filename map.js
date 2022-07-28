const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      return true;
    }
  }
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("Yeah, that's some equal stuff right there.")
  } else {
    console.log("Nope, that ain't equal.")
  }
}


// ------------------------

const words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  let result = [];

  for (let item of array) {
    result.push(callback(item));
  }

  return result;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[0] + word[1]);
console.log(results1, results2, results3);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
