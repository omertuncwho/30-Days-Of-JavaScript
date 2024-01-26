/*let a = 'JavaScript';
let b = 10;
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    let a = 'Python';
    let b = 100;
    console.log(a, b);
  }
  console.log(a, b);
}
letsLearnScope()
console.log(a, b) ;*/
/*
let a = 'JavaScript';
let b = 10;

function letsLearnScope() {
  console.log(a, b);
  let value = false;
  if (true) {
    let a = 'Python'
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
        console.log(a, b, c, value);
  }
 
  console.log(a, b, c, value);

letsLearnScope();
console.log(a, b);
*//*
let names=`John`;
let surnames=`Doe`;

function addString(){
console.log(names,surnames)
if (true){
names =`Omer`;
surnames =`Tunc`;
console.log(names , surnames,)

}
console.log(names,surnames)
}
addString();
console.log(names,surnames);

*/

/*
let a = 'JavaScript' 
let b = 10 

// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, erişilebilir
  let value = false
// block scope
  if (true) {
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value)
  }

  console.log(a, b, c, value) 
}
letsLearnScope()
console.log(a, b) 
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.age);
console.log(person.location);

console.log(person[`firstName`]);
console.log(person[`lastName`]);
console.log(person[`age`]);
console.log([`location`]);
console.log(person[`phone number`]);

*/
const person = {
  firstName: 'Omer',
  lastName: 'Tunc',
  age: 25,
  country: 'Turkey',
  city: 'Izmir',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = ''
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())

const person = {
  firstName: 'Omer',
  lastName: 'Tunc',
  age: 25,
  country: 'Turkey',
  city: 'Izmir',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName())
// Asabeneh Yetayeh