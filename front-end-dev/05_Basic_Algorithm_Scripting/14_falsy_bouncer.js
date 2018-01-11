
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var falsy = [false, null, 0, "", undefined, NaN];
  arr = arr.filter(function(element) {
    if(isNaN(element) && typeof element !== "string") {
      return false;
    }
    return falsy.indexOf(element) === -1;
  });
  return arr;
}
bouncer([7, "ate", "", false, 9]);
