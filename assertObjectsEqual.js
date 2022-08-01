function eqObjects(object1, object2) {
  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);
  let output = true;
  
  if (objectOneKeys.length !== objectTwoKeys.length) {
    output = false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        output = false;
      }
    }
    if (object1[key] !== object2[key]) {
      output = false;
    }
  }
  return output;
}

function assertObjectsEqual(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log('Those are some real equal objects, mhm.');
  } else {
    console.log(`Nope, them ain't equal there, partner.`);
  }
};

module.exports = assertObjectsEqual;