const array1 = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

function main(arr) {
    // Only
  let array2 = [...arr]; // CH
// Only

  return array2;
}

console.log(main(array1));
module.exports = main;