const removeFromArray = function(array,itemToRemove) {
 return array.filter(v => {
    return !itemsToRemove.includes(v);
  });
 }

// Do not edit below this line
module.exports = removeFromArray;
