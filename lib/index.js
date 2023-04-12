const generate = (l = 8) => {
    let pass = "";
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
    const strLen = str.length;
    for (let i = 0; i < l; i++) {
        let char = Math.floor(Math.random() * strLen);
        pass += str.charAt(char);
    }
    return pass;
};
module.exports = generate;
