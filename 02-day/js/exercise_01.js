let challenge = "30 Days Of JavaScript";
console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.slice(3, 21));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

let array = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(array.split(','));

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11)); // Use index 11 for 'J'
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

let nchallenge = "       30 Days Of JavaScript   ";
console.log(nchallenge.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match(/a/g)); // Use a regular expression to find all occurrences of 'a'

console.log(challenge.concat(' 30 Days of', ' JavaScript'));
console.log(challenge.repeat(2));
