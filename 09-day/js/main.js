/*const callback = (n) =>{

return n**2;

}
function cube(callback,n){
return callback(n)*n
}
console.log(cube(callback,3));
*/
/*function mainFunction(callback) {
    console.log("Main function is running.");
    callback();
}

function callbackFunction() {
    console.log("Callback function is called.");
}

mainFunction(callbackFunction);*/

const higherOrder = x => {
    const doSomething = y => {
      const doWhatEver = z => {
        return 2 * x + 3 * y + z;
      };
      return doWhatEver;
    };
    return doSomething;
  };
  
  console.log(higherOrder(2)(3)(10));
  