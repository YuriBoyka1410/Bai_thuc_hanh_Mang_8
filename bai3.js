let str = "The Quick Brown Fox";
let result = "";
for (let i = 0; i < str.length; i++) {
  let character = str[i];
  //Nếu ký tự là chữ thường thì chuyển sang in hoa
  if (
    character === character.toLowerCase() &&
    character !== character.toUpperCase()
  ) {
    result += character.toUpperCase();
  }
  //Nếu ký tự là chữ in hoa thì chuyển sang thường
  else if (
    character === character.toUpperCase() &&
    character !== character.toLowerCase()
  ) {
    result += character.toLowerCase();
  } else {
    result += character;
  }
}
console.log(result);
