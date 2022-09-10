const add = function(a,b) {
  return a + b;

};

const subtract = function(a,b) {
	
  
  return a - b;
};

const sum = function(array) {
  let sum = 0; 


  array.forEach(item => {
    sum += item;
  });
  return sum;
}

const multiply = function(array) {

  let total = 1; 


  array.forEach(item => {
    total *= item;
  });
return total;
};



const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(n) {

  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
