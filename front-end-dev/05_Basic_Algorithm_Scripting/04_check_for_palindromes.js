function palindrome(str) {
  // Good luck!
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  var palindrome = str.split('').reverse().join('');
  if(str === palindrome) {
    return true;
  } else {
    return false;
  }
}

palindrome("not a palindrome");
