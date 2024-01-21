
/*let arr = [];

let secondArray = [1, 2, 3, 4, 5];

let len = secondArray.length;

let first = arr[0];
let midle = arr[parseInt(arr.length / 2)];
let last = arr[arr.length - 1];

const mixedDataTypes = ['bool', false, 1, 3.14, null, undefined, NaN];
*/
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'Oracle', 'Oracle', 'Amazon'];

console.log(itCompanies);

console.log(`There are ${itCompanies.length} IT Companies:`);

console.log(itCompanies[0]);
console.log(itCompanies[parseInt(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

console.log(itCompanies.toString());

if (itCompanies.includes('Google')) {
    console.log("Google exists!");
} else console.log("Google does not exist");


console.log(itCompanies.sort());

console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));

len = itCompanies.length
let last3Companies = itCompanies.slice(len - 3, len);
console.log("last", last3Companies);

let midCompany = itCompanies.slice(parseInt(itCompanies.length / 2));
console.log(midCompany);

itCompanies.pop();
console.log(itCompanies);
itCompanies.splice(parseInt(itCompanies.length / 2) - 1, 2);
console.log(itCompanies);
itCompanies.splice(itCompanies.length - 1, 1);
console.log(itCompanies);
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

