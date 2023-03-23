const generate = (prefix = "", l = 8) => {
    var pass = prefix;
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
    for (let i = 1; i <= l; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
    }
    return pass;
};
module.exports = generate;
