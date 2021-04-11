/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function replace(str, index, replacement) {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

function getVersion(newArray, el, position) {
  for (let i = 0; i < position; i++) {
    if (newArray[i] === el) {
      const newNumber = (parseInt(el.charAt(el.length - 2), 10) + 1);
      /* eslint-disable no-param-reassign */
      el = replace(el, el.length - 2, newNumber.toString());
    }
  }
  return el;
}

function renameFiles(names) {
  if (names.length === 0) {
    return names;
  }

  const newArray = [];
  newArray.push(names[0]);
  let pushed = false;

  for (let j = 1; j < names.length; j++) {
    let el = names[j];
    pushed = false;
    for (let i = 0; i < j; i++) {
      if (newArray[i] === el) {
        el += '(1)';
        el = getVersion(newArray, el, j);
        newArray.push(el);
        pushed = true;
        break;
      }
    }
    if (!pushed) {
      newArray.push(el);
    }
  }

  return newArray;
}

module.exports = renameFiles;
