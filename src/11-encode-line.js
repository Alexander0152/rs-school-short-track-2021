/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  const withoutDuplication = [];
  let arr = str.split('');
  withoutDuplication.push(arr[0]);
  for (let i = 1; i < str.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      withoutDuplication.push(arr[i]);
    }
  }
  let count;
  withoutDuplication.forEach((el) => {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (el === arr[i]) {
        count++;
      } else break;
    }
    arr = arr.slice(count, arr.length);
    if (count > 1) {
      result.push(count.toString() + el);
    } else result.push(el);
  });
  return result.join('');
}

module.exports = encodeLine;
