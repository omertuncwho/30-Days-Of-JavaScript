
const age = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
age.sort();
console.log(age);
const min = age[0];
const max = age[age.length - 1];
let len = age.length;
let median = (age[parseInt(len / 2) - 1] + age[parseInt(len / 2)]) / 2;
const average = (age[0] + age[1] + age[2] + age[3] + age[4] + age[5] + age[6] + age[7] + age[8] + age[9]) / len;
console.log(average);

let range = max - min;
console.log("Range of age: ", range);

Math.abs(min - average) < Math.abs(max - average) ? console.log("Left") : console.log('Right');

let firstCountries = countries.slice(0, 10);
console.log(firstCountries);

if (countries.length % 2 === 0) {
    let firstMid = (countries.length) / 2 - 1;
    let secondMid = (countries.length) / 2;
    console.log(countries[firstMid], countries[secondMid]);
} else console.log(countries[parseInt(countries.length / 2) - 1]);

countries.shift();
console.log(countries);
let firstHalf = countries.splice(0, countries.length / 2);
let secondHalf = countries.splice(0, countries.length);
console.log(secondHalf);
