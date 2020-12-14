// let repeatStr = (str, count) => {
//   let i = 0;
//   return 
// }

// function digital_root(n) {
//   let str = '' + n;
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//   sum += str[i] * 1;
//   }
//    return (sum <=9) ? sum : digital_root(sum);
// }

// function getRectangleString(width, height) {
//   return '┌' + '-'.repeat(width - 2) + '┐' + '\n' + ('|' + ` ` .repeat(width - 2) + '|' + '\n').repeat(height) + '└' + '-'.repeat(width - 2) + '┘';
// 

// function getRectangleString(width, height) {
//    return `${'┌'+ '-'.repeat(width - 2) + '┐' + ('\n' + '|' + ' '.repeat(width - 2) + '|').repeat(height - 2) + '\n' + '└' + '-'.repeat(width - 2) + '┘'}`;
// }

// function getRectangleString(width, height) {
//   const top = `┌${'─'.repeat(width - 2)}┐\n`;
//   const center = `│${' '.repeat(width - 2)}│\n`.repeat(height - 2);
//   const bottom = `└${'─'.repeat(width - 2)}┘\n`;
//   return `${top}${center}${bottom}`;
// }

// console.log(getRectangleString(10, 40))

// function insertItem(arr, item, index) {
//   arr.splice(index, 0, item);
//   return arr;
// }

//  console.log(insertItem([1, 3, 4, 5, 6], 2, 1));

// function getStringsLength(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     newArr.push(arr[i].length);
//   }
//   return newArr;
// }

// function getStringsLength(arr) {
//  //  let fn;
//  //  return arr.map(fn = (x) => {
//  //   return x.length;
//  // });
//   return arr.map((x) => x.length);
// }

// console.log(getStringsLength(['1', '2', '222', 'qwhwf']));

// function getTail(arr, n) {
//   return arr.splice(-n);
// }

//   console.log(getTail([ 1, 3, 4, 5 ], 2))

// function toCsvText(arr) {
//   return arr.map((x) => x.join(',') + '\n');
// }

// console.log(toCsvText([[ 0, 1, 2, 3, 4 ],[ 10,11,12,13,14 ],[ 20,21,22,23,24 ],[ 30,31,32,33,34 ]]));

function get3TopItems(arr) {
  return arr.split('').reverse().join(' ');
}

console.log(get3TopItems([ 0, 1, 2, 3, 4 ]));

// function getLastDigit(value) {
//   value = value.toString();
//   return value[value.length - 1];
// }

//  console.log(getLastDigit(2224));

// function toNumber(value, def) {
//   return (Number.isNaN(value * 1)) ? def : value * 1;
// }

// console.log(toNumber('1255v', 0));

























































