const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
}


for (let k = 10; k >= 0; k--) {
    console.log(k);
}

for ( let n=35; n<=0;n++)
{
console.log(n);
}*/

/*
for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '#';
    }
    console.log(line);
}


for(let x =0;x<=10;x++)
{
for(let xy=0;xy<=10;xy++)
{
console.log(`${x}x${x}=${x*x}`);
}
}




for (let x = 0; x <= 10; x++) {
    for (let xy = 0; xy <= 10; xy++) {
        for (let xy = 0; xy <= 10; xy++) {
            console.log(`${x} ${x^2}  ${x^3}`);
        }
        
}}

*/
/*
for (i=0;i<=100;i++)
if(i%2===0)
{
console.log(i)}
*/
/*
for (i=0;i<=100;i++)
if(i%2===1)
{
console.log(i)}*/

let total = 0;

for (let i = 0; i <= 100; i++) {

    total += i;
}

console.log(`he sum of all numbers from 0 to 100 is ${total}.`)



let totalEvens = 0;
let totalOdds = 0;

for (let i = 0; i <= 100; i += 2) {

    totalEvens += i;


    totalOdds += i / 2;
}

console.log(`The sum of all evens from 0 to 100 is ${totalEvens}. And the sum of all odds from 0 to 100 is ${totalOdds}.
`)

let evenSum = 0;
let ratioSum = 0;
let resultArray = [];
for (let number = 0; number <= 100; number += 2) {
    evenSum += number;

    ratioSum += number / 2;
    resultArray.push({ number, evenSum, ratioSum });
}
console.log(resultArray);

function generateRandomArray(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * 100);
        randomArray.push(randomNumber);
    }
    return randomArray;
}

const myRandomArray = generateRandomArray(5);

console.log(`Random Arrays: ${myRandomArray}`);

function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters[randomIndex];
    }
    return randomId;
}

const myRandomId = generateRandomId();

console.log(`Random IDs, ${myRandomId}`);