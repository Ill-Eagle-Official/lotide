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

function middle(array) {
  let emptyArray = [];
  let resultArray = [];
  if(array.length <= 2) {return emptyArray;}
  if (array.length % 2 === 0) {
    resultArray.push(array[Math.floor((array.length - 1) / 2)]) && resultArray.push(array[Math.floor(array.length / 2)]);
  }
  if (array.length % 2 !== 0) {
    resultArray.push(array[Math.floor(array.length / 2)]);
  }
  return resultArray;
};

console.log(middle([1, 2, 3, 4, 5, 6]) );