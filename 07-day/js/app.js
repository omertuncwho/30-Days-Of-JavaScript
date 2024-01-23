function square()
{
let sideOne=4;
let sq=sideOne*sideOne;
console.log(sq)
}
square();

function topla(){
let sayi1 =1900;
let sayi2=23;
let toplam=sayi1+sayi2;
console.log(toplam);
}
topla();

/*
function printFullName(){
let firstName=`Ömer`;
let lastName=`Tunç`;
let spacing=` `
let fullName=(`My name is ${firstName}${spacing}${lastName}`)
console.log(fullName)
}
printFullName();
*/
/*
function printFullName(){
    let firstName=`Ömer`;
    let lastName=`Tunç`;
    let spacing=` `
    let fullName=(`My name is ${firstName}${spacing}${lastName}`)
return fullName;
    }

    console.log(printFullName());
*/
    /*
    function addTwoNumbers() {
        let numOne = 2;
        let numTwo = 3;
        let total = numOne + numTwo;
        return total;
  
    }
  
  console.log(addTwoNumbers())*/
/*
  function areaOfCircle(r){
let area= Math.PI*r*r;
return area;
}
console.log(areaOfCircle(10))


function addThreeNumbers(numberOne,numberTwo,numberThree)
{
let sum = numberOne+numberTwo+numberThree;
return sum;
}
console.log(addThreeNumbers(10,22,33));
*/
/*
function concatName(fname,sname){
return `${fname} ${sname}`;
}
console.log(concatName(`Luke`,`Skycoder`));*/
/*
function summingArrayValues(myArray){
let sum = 0 ;
for (let i = 0 ; i<myArray.length;i++)
{
sum=sum+myArray[i];
}
return sum;
}
const numbers=[1,2,3,4,5,6,8];
console.log(summingArrayValues(numbers));

function square(n)
{
return n*n;
}
console.log(square(2));

*/

const square = n => {

return n*n ;
}
console.log(square(2));

/*const square = n => n*n;*/


const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase());
    }
    return newArr;
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
  console.log(changeToUpperCase(countries));

  const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Ömer', 'Tunç'));

function functionName(param = value) {
  }
  functionName();
  functionName(arg);

  function greetings(name = 'Tunç') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`;
    return message;
  }
  
  console.log(greetings());
  console.log(greetings('Ömer'));

  function calculateAge(birthYear, currentYear = 2024) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(1998))

  function generateFullName(firstName = 'Ömer', lastName = 'Tunç') {
    let space = ' ';
    let fullName = firstName + space + lastName;
    return fullName;
  }
  
  console.log(generateFullName());
  console.log(generateFullName('George', 'Tom'));