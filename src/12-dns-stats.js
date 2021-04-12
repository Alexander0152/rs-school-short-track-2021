/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const separate = [[]];
  const allParsings = [[]];
  const unicParsings = [];
  let count = 0;
  domains.forEach((el) => {
    separate[count] = el.split('.');
    count++;
  });
  let parse;
  for (let i = 0; i < domains.length; i++) {
    parse = '';
    for (let j = separate[i].length - 1; j >= 0; j--) {
      parse += `.${separate[i][j]}`;
      allParsings.push(parse);
      if (!unicParsings.includes(parse)) {
        unicParsings.push(parse);
      }
    }
  }
  unicParsings.forEach((el) => {
    count = 0;
    allParsings.forEach((element) => {
      if (el === element) {
        count++;
      }
    });
    result[el] = count;
  });
  return result;
}

module.exports = getDNSStats;
