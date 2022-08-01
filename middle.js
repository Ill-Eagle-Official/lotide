

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

module.exports = middle;