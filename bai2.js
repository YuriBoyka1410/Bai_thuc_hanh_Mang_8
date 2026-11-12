let str = "025468";
let result = "";
for (let i = 0; i < str.length; i++) {
  //Lấy ký tự hiện tại
  let current = Number(str[i]);
  //Thêm ký tự hiện tại vào kết quả
  result += str[i];
  //Kiểm tra xem còn ký tự tiếp theo không
  if (i < str.length - 1) {
    let next = Number(str[i + 1]);
    //Kiểm tra hai số có cùng là số chẵn hay không
    if ((current % 2 === 0) & (next % 2 === 0)) {
      result += "-";
    }
  }
}
console.log(result);
