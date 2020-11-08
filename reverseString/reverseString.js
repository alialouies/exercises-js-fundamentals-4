const reverseString = function(str) {
   let splitString = str.split('');
   let reverseArray = splitString.reverse();
   let reverseString = reverseArray.join('');
   return reverseString;
}

module.exports = reverseString
