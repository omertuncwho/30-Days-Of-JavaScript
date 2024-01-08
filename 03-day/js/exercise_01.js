let firstName = "John";
let secondName = "Doe";
let country = "Greece";
let city = "Sparta";
let age = "56";
let isMarried = true;
let year = 1286;
console.log(typeof year);
let number = 10;
console.log(typeof '10' === typeof 10);  //  false
let num1 = parseInt('9.8');
console.log(num1 === 10);  //  false
console.log(Boolean('Hello'));  //  true
console.log(Boolean(42));  //  true
console.log(Boolean([1, 2, 3]));  //  true
console.log(Boolean(''));  //  false
console.log(Boolean(0));  //  false
console.log(Boolean(null));  //  false
console.log(num2 == num3);//false
console.log(num2 < num3);//true
console.log(num2 > num3);//false
console.log(num2 + num2 > num3);//true
console.log(num3 - num2 < num2);//true
console.log('check');
/*
true
true
false
false
true
true
false
false
true
false */

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4)
console.log(4 != 4);
console.log(4 !== '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('check2')

/*
ture
false
true
true
false
true
true
true
false
true
true
*/

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

var date = new Date;
console.log(date.getFullYear());
console.log(date.getMonth())
console.log(date.getUTCDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());

console.log(date.getDate());
console.log(date.getHours() + ':' + date.getMinutes());
console.log(date.getMinutes());

console.log(Date.now());