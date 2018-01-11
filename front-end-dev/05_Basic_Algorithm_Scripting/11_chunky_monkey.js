
function chunkArrayInGroups(arr, size) {
  var result = [];
  // Break it up.
  while(true) {
    result.push(arr.splice(0, size));
    if(arr.length === 0) {
      return result;
    }
  }
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
