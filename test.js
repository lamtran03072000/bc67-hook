// 0 + 1 + 2 + 3 + 4

const array = [1, 2, 3, 4];
// 6
const total = array.reduce((pre, current) => {
  return pre + current; //3
}, 10);
console.log('total: ', total);
