const generate = (l: number = 8): string => {
  let pass = "";
  const str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 1; i <= l; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }

  return pass;
};

module.exports = generate;
