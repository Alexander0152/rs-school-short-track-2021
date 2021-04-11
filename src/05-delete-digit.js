/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const numbers = [];
  for (let i = 0; i < arr.length; i++) {
    const number = arr.slice();
    number.splice(i, 1);
    numbers[i] = number.join('');
  }
  /* eslint-disable prefer-spread */
  return Math.max.apply(Math, numbers);
}

module.exports = deleteDigit;
