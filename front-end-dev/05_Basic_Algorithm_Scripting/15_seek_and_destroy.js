
function destroyer() {
  // Remove all the values
  var arr = Array.from(arguments);
  var targetArr = arguments[0];
  var matchingArr = arr.splice(1);

  targetArr = targetArr.filter(function(element) {
    return matchingArr.indexOf(element) === -1;
  });

  return targetArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
