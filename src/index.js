module.exports = function toReadable (number) {
  var res = "";
  var nn = false;
  var arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var n = Math.floor(number / 100);
  if(n > 0) {
      res += arr[n] + " hundred";
  }
  n = Math.floor(number % 100 / 10);
  if (n!= 0 && res !== "" && nn == false) res += " ";
  if(n == 1) nn = true;
  if(n == 2) res += "twenty";
  if(n == 3) res += "thirty";
  if(n == 4) res += "forty";
  if(n == 5) res += "fifty";
  if(n >= 6 && n!= 8) res += arr[n] + "ty";
  if(n == 8) res += arr[n] + "y";
  n = Math.floor(number % 100 % 10);
  if (n!= 0 && res !== "" && nn == false) res += " ";
  if(nn == true) {
      if(n == 0) res += "ten";
      if(n == 1) res += "eleven";
      if(n == 2) res += "twelve";
      if(n == 3) res += "thirteen";
      if(n >= 4 && n != 5 && n != 8) res += arr[n] + "teen";
      if(n == 5) res += "fifteen";
      if(n == 8) res += arr[n] + "een";
  } else {
      if(n > 0 || res === "") res += arr[n];
  }
  return res;
}
