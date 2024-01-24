/*function fullName(){
console.log(`Ömer Tunç`);
}
fullName();
*/
function fullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}
fullName(`Ömer`, `Tunç`);

function addNumbers(param1, param2) {
    let sum = (param1 + param2);
    console.log(sum);
}
addNumbers(1920, 3);

/*function areaOfRectangle(length,width)
{
let area=(length*width);
console.log(area);
}
areaOfRectangle(12,15);*/
/*
function perimeterOfRectangle (length,width)
{
let perimeter  = (2*(length+width));
console.log(perimeter);
}
perimeterOfRectangle(14,16);

function volumeOfRectanglePrism(length,width,height)
{
let volume= (length*width*height)
console.log(volume);
}
volumeOfRectanglePrism(10,12,14);
*//*
function areaOfCircle (r)
{
    let circleArea = Math.PI * r * r;
    console.log(circleArea);
}
areaOfCircle(5);  */
/*
function circumOfCircle (r)
{
let circum= 2*(Math.PI*r);
console.log(circum);
}
circumOfCircle(3);

function densityOfSubstance(mass,volume){
let density=mass/volume;
console.log(density);
}
densityOfSubstance(21,34);*/
/*
function calculatingSpeed(distance,time)
{
let sp=distance/time;
console.log(sp);
}
calculatingSpeed(50,10);*/

/*function weightOfSubstance(mass,gravity){
    let weight=mass*gravity;
    console.log(weight);

}
weightOfSubstance(5,33);*/
/*
function convertCelsiusToFahrenheit (celcius){
let convert = (celcius*9/5)+32;
console.log(convert);
}
convertCelsiusToFahrenheit(24);
*//*
function checkSeason (month){

    if(month==`December`|| month==`January`||month==`February`)
    {
    console.log(`Winter`);
    }
    else if (month === `March`|| month==`April`|| month==`May`)
    {
    console.log(`Spring`);
    }
    else if (month===`June`|| month==`July`|| month==`August`)
    {
    console.log(`Summer`);
    }
    else if(month==`September`|| month==`October`|| month==`November`)
    {
    console.log(`Fall`);
    }
    else{
    console.log(`ERROR ERROR`);
    }

}


checkSeason(`March`);*/

/*
function bmiCalculator(age, weight, height) {
    let bmi;
    if (age <= 20) {
        console.log(`You are ${age} years old. You are not old enough to make this test.`)
    }
    else {
        
        bmi = weight / (height * height);
        if (bmi <= 18.5) {
            console.log(`You are Underweight: Your BMI is ${bmi}`);
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            console.log(`You are Normal weight:: Your BMI is ${bmi}`);
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            console.log(`You are Overweight: Your BMI is ${bmi}`);
        }
        else if (bmi >= 30) {
            console.log(`You are Obese: Your BMI is ${bmi}`);
        }
    }
    console.log(bmi);
}

bmiCalculator(21,95,185);*/

