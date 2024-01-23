/*function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  }
  const randomId = generateRandomId(8);
  console.log(randomId);




function generateRandomHexId(length) {
  const characters = '0123456789ABCDEF';
  let randomId = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}
const randomHexId = generateRandomHexId(6);
console.log(`#${randomHexId}`);

*/

/*
for (let i = 0; i < 1; i++) {
  const rand = Math.floor(Math.random() * 251);
  for (let j = 0; j < 1; j++) {
    const rando = Math.floor(Math.random() * 251);
    for (let k = 0; k < 1; k++) {
      const random = Math.floor(Math.random() * 251);
      console.log(`RGB(${rand},${rando},${random})`);
    }

  }

}
*/

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
  'Kenya!'
]
/*
for (let j=0; j<countries.length;j++)
{

console.log(countries[j].length)
}


for (i=0;i<countries.length;i++)
{
console.log(`[${countries[i]},${(countries[i].substring(0, 3).toUpperCase())}, ${countries[i].length}],`);
}
*/
console.log(countries.filter(country => country.toLowerCase().includes('land')));

console.log(countries.filter(country => country.toLowerCase().includes('ia')));

for (let j = 0; j < countries.length; j++) {

  console.log(countries[j].length)
}
/*

const maxChar = countries.reduce((maxCountry, currentCountry) => {
  return currentCountry.length > maxCountry.length ? currentCountry : maxCountry;
}, '');

console.log(`The country with the most characters is: ${maxChar}`);
*/
const maxChar = countries.reduce((maxCountry, currentCountry) => {
  return currentCountry.length === 5 ? currentCountry : maxCountry;
}, '');

console.log(`The country with the most characters is: ${maxChar}`);

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
/*
let lWord = '';
for (let i = 0; i < webTechs.length; i++) {
  const currentWord = webTechs[i];
  if (currentWord.length > lWord.length) {
    lWord = currentWord;
  }
}
console.log(lWord);*/
/*
const newArray = webTechs.map(tech => [tech, tech.length]);

console.log(newArray);*/

/*
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const mernAcronym = mernStack.reduce((acronym, tech) => acronym + tech[0], '');
console.log(mernAcronym);
*/

const techStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (const tech of techStack) {
  console.log(tech);
}
/*

const fruits = ['banana', 'orange', 'mango', 'lemon'];
const midpoint = Math.floor(fruits.length / 2);
for (let i = 0; i < midpoint; i++) {
  const temp = fruits[i];
  fruits[i] = fruits[fruits.length - 1 - i];
  fruits[fruits.length - 1 - i] = temp;
}

console.log(fruits);
*/

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (const stack of fullStack) {
  for (const technology of stack) {
    console.log(technology);
  }
}
