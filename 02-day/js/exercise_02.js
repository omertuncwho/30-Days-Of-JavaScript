console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

let num = 10;
console.log(typeof parseInt('10') === 'number' && parseInt('10') === num);
console.log(parseFloat('9.8') === 10);
let str = "Python,Jargon";
console.log(str.match(/on/g));
let stri = "I hope this course is not full of jargon";
console.log(stri.match(/jargon/g));
const randNum = Math.floor(Math.random() * 101);
console.log(randNum);
const randNum1 = Math.floor(Math.random() * 51) + 50; // 
console.log(randNum1);
const randNum2 = Math.floor(Math.random() * 256);
console.log(randNum2);

let myString = 'JavaScript';
let randomIndex = Math.floor(Math.random() * myString.length);

let randomCharacter = myString.charAt(randomIndex);

console.log(`Random character at index ${randomIndex}: ${randomCharacter}`);

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

let strin = "You cannot end a sentence with because because because is a conjunction";
let slicedString = strin.substring(31, 55); // Corrected arguments

console.log(slicedString);