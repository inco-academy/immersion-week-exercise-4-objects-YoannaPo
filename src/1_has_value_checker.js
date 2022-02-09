
function hasValue(objectContainer, valueTocheck) {

  if (Object.values(objectContainer).includes(valueTocheck)) {
      return true;
      //console.log("Jest");

  }  else    {
      return false;
      //console.log("Nie ma");
  }


};

module.exports = hasValue;
hasValue({"hello": "bonjour", "my": "mon"}, "bonjour");
hasValue({"hello": "bonjour", "my": "mon"}, "hello");   // false
