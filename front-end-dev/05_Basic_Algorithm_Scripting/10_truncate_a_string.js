
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num <= 3) {
    str = str.substr(0, num) + "...";
  } else if(num < str.length) {
    str = str.substr(0, num-3) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
