// EXPRESSION FUNCTION

// multiple

let firstExample = function(num){
  return num ** 2;
}
console.log("first exapmle result = " + firstExample(12));

let secondExample = function(num1 = 2, num2 = 7){
  return num1 * num2;
}
console.log("second example result = " + secondExample(15, 34));

// divided
let thirdExample = function(num3, num4){
  return num3 / num4;
}
console.log("third example result = " + thirdExample(35, 7));

// plus

let fourthExample = function (number1){
  return number1 + 123;
}
console.log("fourth example result = " + fourthExample(877));

let fivethExample = function(number2, number3){
  return number2 + number3;
}
console.log("fiveth example result = " + fivethExample(12, 23));
// minus

let sixthExample = function(number4){
  return number4 - "12";
}
console.log("sixtth example result = " + sixthExample(1234));

let seventhExample = function (number5, number6){
  return number5 - number6;
}
console.log("seventh example result = " + seventhExample(44, 32));


// DECLORATION FUNCTION
// plus
console.log("first -> " + eighthExample("Salom", "Dunyo"));
function eighthExample(info1, info2){
  return info1 + " " + info2;
}

console.log("second -> " + ninethExample(998, 675));
function ninethExample(info3, info4){
  return info3 + info4;
}

// minus
console.log("third -> " + tenExample(123, 12));
function tenExample(info5, info6){
  return info5 - info6;
}

console.log("fourth - > " + eleventhExample(443));
function eleventhExample(info7){
  return info7 - "123"
}

// multiple
console.log("fiveth - > " + twelveExample("12"));
function twelveExample(decNum){
  return decNum ** 3;
}

console.log("sixth - > " + threetenthExample(5, 652));
function threetenthExample(decNum2, decNum3){
  return decNum2 * decNum3
}
// divide
console.log("seventh -> " + fourteenthExample(144));
function fourteenthExample(decNum4){
  return decNum4 / 12
}