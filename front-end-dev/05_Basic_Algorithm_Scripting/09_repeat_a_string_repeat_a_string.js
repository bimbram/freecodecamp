
function repeatStringNumTimes(str, num) {
  // repeat after me
  var result = "";
  for(var x = 0; x<num; x++) {
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);
