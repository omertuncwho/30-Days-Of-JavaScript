/*let exam=99;

if (exam>0 && exam<=49)
{
console.log(`F`);
}
else if (exam>49 &&exam<=59){
    console.log(`D`);

}
else if (exam>59 && exam<=69)
{
console.log(`C`);
}
else if(exam>69 && exam<=89){
console.log(`B`);
}
else if (exam>89 && exam<=100)
{
console.log(`A`);
}
else {
console.log(`enter a vaild number...`)
}*/



let newDay = "sUnDaY";
let day = newDay[0].toUpperCase() + newDay.slice(1).toLowerCase();


if (day == `Monday`) {
    console.log(`${day} is a weekday.`);
}
else if (day == `Tuesday`) {
    console.log(`${day} is a weekday.`);
}
else if (day == `Wednesday`) {
    console.log(`${day} is a weekday`);
}
else if (day == `Thursday`) {
    console.log(`${day} is a weekday.`);
}
else if (day == `Friday`) { console.log(`${day} is a weekday.`); }
else if (day == `Saturday`) { console.log(`${day} is a weekend`); }
else if (day == `Sunday`) { console.log(`${day} is a weekend`); }
else {
    console.log(`enter a vaild day !..`);
}


