/**
 *  Return a numeric value for ordering strings,
 *  returns value based on ascending order only
 *
 * @param {string} a
 * @param {string} b
 * @returns number
 */
function compareStrings(a, b) {
  let position = 0;
  if (a.toLowerCase() > b.toLocaleLowerCase()) {
    position = 1;
  } else if (a.toLowerCase() < b.toLowerCase()) {
    position = -1;
  }
  return position;
}

export default compareStrings;
