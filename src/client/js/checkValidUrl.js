function validUrl(inputText) {
  var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(inputText);
  return valid;
}

export { validUrl };
