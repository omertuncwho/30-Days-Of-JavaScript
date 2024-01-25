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
}
letsLearnScope();
console.log(a, b);