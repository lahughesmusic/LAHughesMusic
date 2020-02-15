/* eslint-disable no-useless-escape */
// eslint-disable-next-line no-extend-native
String.prototype.replaceAll = function(str1, str2, ignore) {
  return this.replace(
    new RegExp(
      str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"),
      ignore ? "gi" : "g"
    ),
    // eslint-disable-next-line eqeqeq
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line eqeqeq
    typeof str2 == "string" ? str2.replace(/\$/g, "$$$$") : str2
  );
};
