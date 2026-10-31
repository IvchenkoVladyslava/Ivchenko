let num = 135;
let isThreeDigit = num >= 100 && num <= 999;
let isOdd = num % 2 !== 0;

let result = isThreeDigit && isOdd;
console.log(result);
