/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let firstPos = 0;
  let lastPos = array.length - 1;
  let result = -99;
  let isFound = false;
  let center;

  while (isFound === false && firstPos <= lastPos) {
    center = Math.floor((firstPos + lastPos) / 2);
    if (array[center] === value) {
      isFound = true;
      result = center;
    } else if (array[center] > value) {
      lastPos = center - 1;
    } else {
      firstPos = center + 1;
    }
  }
  return result;
}

module.exports = findIndex;
