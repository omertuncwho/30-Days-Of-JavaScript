/*function solveLinEquation(a,b,c,x,y,){
let solve = (a*x)+(b*y)+c;
console.log(solve);

}
solveLinEquation(2,-3,5,1,4);*/
/*
function solveQuadEquation(a,b,x)
{
    let c=0;
let solv= a*(x*x)+(b*x)+c;

console.log(solv);
}
console.log(solveQuadEquation(1, -1, 0)) // {-2}*/
/*
function showDateTime() {
let time = Date();
console.log(time);
}
showDateTime();
*/
/*function sumOfNumbers(number) {
    let num = 0;

    for (let i = number; i >= 0; i--) {
        num += i;
    }

    console.log(num);
}

sumOfNumbers(4);
*/
/*
function sumOfEvenNumbers(number) {
    let num = 0;

    for (let i = number; i >= 0; i--) {
        if (i % 2 === 0) {
            num += i;
        } else {
           
            continue;
        }
    }

    console.log(num);
}

sumOfEvenNumbers(6);
*//*
function sumOfOddNumbers(number) {
    let num = 0;

    for (let i = number; i >= 0; i--) {
        if (i % 2 === 1) {
            num += i;
        } else {
            continue;
        }
    }

    console.log(num);
}

sumOfOddNumbers(5);
*/
/*
function sumOddsEvens(number) {
    let num = 0;
    let num2 = 0;
    let sayac2 = 0
    let sayac = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 1) {

            sayac++;
            num += i;
        } else {
            continue;
        }
    }

    console.log(sayac);
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {

            sayac2++;
            num2 += i;
        } else {
            continue;
        }
    }

    console.log(sayac2);
}


sumOddsEvens(100);*/

function sumOfEverything(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(sum);
}

sumOfEverything([1, 2, 3, 4]);