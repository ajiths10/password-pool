type prefix = string | number | undefined;
type length = number;

const generate = (prefix: prefix = "", l: length = 8): string => {
  var pass = prefix;
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 1; i <= l; i++) {
    var char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }

  return pass as string;
};

module.exports = generate;
