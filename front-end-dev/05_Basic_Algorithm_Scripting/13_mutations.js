
function mutation() {
  var arg = Array.from(arguments)[0];

  var matchingElement = arg[1]
    .toLowerCase()
    .split("")
    .filter(function(item, index, self) {
      return self.indexOf(item) === index;
    });

  var targetElement = arg[0]
    .toLowerCase()
    .split("");

  targetElement.forEach(function(char) {
    var mathingElementIndex = matchingElement.indexOf(char);

    if(mathingElementIndex !== -1) {
      matchingElement.splice(mathingElementIndex, 1);
    };
  });
  if(matchingElement.length === 0) {
      return true;
    }
  return false;
}



mutation(["hello", "Hello"]);
