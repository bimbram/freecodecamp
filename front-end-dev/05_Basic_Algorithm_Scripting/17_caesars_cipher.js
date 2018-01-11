
function rot13(str) { // LBH QVQ VG!
  str = str
    .split("")
    .map(function(char) {
      if(char === "." || char === " " || char === "!" || char ==="?") {
        return char;
      } else {
        return char.charCodeAt(0);
      }
    })
    .map(function(char) {
      if(char === "." || char === " "  || char === "!" || char ==="?") {
        return char;
      } else {
        if((char-13) < 65 && (char-13)) {
          return String.fromCharCode(91 - (65 - (char-13)));
        } else {
          return String.fromCharCode(char-13);
        }

      }
  }).join("");
  return str;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
