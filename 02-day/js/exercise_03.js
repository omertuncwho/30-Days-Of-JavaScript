let word = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveCount = (word.match(/love/gi) || []).length;
console.log(loveCount);

let word2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(word2.match(/because/g));

const sentence = 'I am a teacher, &and& I love teaching;. There is nothing; as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher! Th is 30DaysOfJavaScript is also the result of love of teaching';


const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = text.match(/\d+/g);
const totalAnnualIncome = numbers.reduce((sum, number) => sum + parseInt(number), 0);
console.log('Total Annual Income:', totalAnnualIncome, 'euro');
