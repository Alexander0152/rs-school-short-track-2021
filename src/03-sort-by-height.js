/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const positions = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      positions.push(i);
    }
  }

  const filtered = arr.filter((value) => value !== -1);

  filtered.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  positions.forEach((el) => {
    filtered.splice(el, 0, -1);
  });

  return filtered;
}

module.exports = sortByHeight;
