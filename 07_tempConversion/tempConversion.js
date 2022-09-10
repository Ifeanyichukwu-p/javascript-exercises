const ftoc = function(fahrenheit) {
  let fTemp = fahrenheit ;
  let cTemp = (fTemp - 32)*5/9;
  let celcius = Math.round(cTemp*10)/10;
  return celcius;

};

const ctof = function(celcius) {
  let cTemp = celcius;
  let fTemp = (9*cTemp )*1/5 +32;
  let fahrenheit = Math.round(fTemp*10)/10;
  return fahrenheit;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
