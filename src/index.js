module.exports = function check(str, bracketsConfig) {
  let pairsBracket = bracketsConfig.reduce((acc, obj) => {
    acc[obj[1]] = obj[0];
    return acc;
  }, {});
  let stack = [];
  let arr = str.split('');

  arr.map(curElem => {
    let topElem = stack[stack.length - 1];

    (pairsBracket[curElem] === topElem && stack.length > 0) ? stack.pop() : stack.push(curElem);
  })
  return stack.length === 0;
}