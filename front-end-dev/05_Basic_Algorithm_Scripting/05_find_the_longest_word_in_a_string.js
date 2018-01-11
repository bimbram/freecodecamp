
function findLongestWord(str) {
  str = str.split(" ").map(function(element) {
    return element.length;
  }).reduce(function(a,b) {
    return Math.max(a,b);
  });
  return str;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


var arr = [1,2,3];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
