
function titleCase(str) {
  str = str
    .toLowerCase()
    .split(" ")
    .map(function(item) {
      return item = item[0].toUpperCase() + item.substr(1);
    })
    .join(" ");
  return str;
}

titleCase("I'm a little tea pot");
