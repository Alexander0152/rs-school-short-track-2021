/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n.toString().split('');
  do {
    if (typeof (result) === 'number') {
      result = result.toString().split('');
    }
    let sum = 0;
    result.forEach((el) => {
      /* eslint-disable no-param-reassign */
      el = parseInt(el, 10);
      sum += el;
    });
    result = sum;
  }
  while (result > 9);
  return result;
}

module.exports = getSumOfDigits;
