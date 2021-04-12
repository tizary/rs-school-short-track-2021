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
  const arrInt = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    arr.splice(i, 1);
    const num = +arr.join('');
    arrInt.push(num);
    arr.splice(i, 0, elem);
  }
  const max = Math.max(...arrInt);
  return max;
}

module.exports = deleteDigit;
