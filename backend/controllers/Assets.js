module.exports.random = (length = 8, type = "N") => {
  let chars = "";
  if (type == "N") {
    chars = "0123456789";
  } else if (type == "S") {
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  } else if (type == "s") {
    chars = "abcdefghiklmnopqrstuvwxyz";
  } else {
    chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  }
  let randomstring = "";
  for (var i = 0; i < length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
};
