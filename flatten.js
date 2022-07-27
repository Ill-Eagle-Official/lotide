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

function flatten(array) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(array[i]);
    } else {
      result.push(array[i])
    }
  }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); 
