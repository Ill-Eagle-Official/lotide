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
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("Yeah, that's some equal stuff right there.")
  } else {
    console.log("Nope, that ain't equal.")
  }
};

const without = function(source, toRemove) {
  return source.filter(leaveIt => leaveIt != toRemove);
};

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); 
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);