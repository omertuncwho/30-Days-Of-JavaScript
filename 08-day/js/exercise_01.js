let dog = {};

console.log(dog);

dog.name = 'Esco';
dog.legs = 4;
dog.color = 'Brown';
dog.age = 3;

dog.bark = function () {
    return 'woof woof';
};

let dogName = dog.name;
let dogLegs = dog.legs;
let dogColor = dog.color;
let dogAge = dog.age;
let dogBark = dog.bark();

console.log('Name:', dogName);
console.log('Legs:', dogLegs);
console.log('Color:', dogColor);
console.log('Age:', dogAge);
console.log('Bark:', dogBark);

dog.breed = 'Belgian Malinois';
dog.getDogInfo = function () {
    return `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}, Breed: ${this.breed}, Bark: ${this.bark()}`;
};

console.log(dog);

let dogInfo = dog.getDogInfo();
console.log(dogInfo);
