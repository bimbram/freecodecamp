
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var initialValue = arr[0];
  var nearestValue = arr
    .sort(function(a,b) {
      return a-b;
    })
    .reduce(function(accumulator, currentValue, currentIndex) {
      if(currentValue < num) {
        return currentIndex+1;
      } else if(currentValue === num){
        return currentIndex;
      } else {
        return accumulator;
      }
    }, 0);
  return (nearestValue);
}

getIndexToIns([3, 10, 5], 3);
