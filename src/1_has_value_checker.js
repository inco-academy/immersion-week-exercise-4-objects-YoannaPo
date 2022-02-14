// 1. Has Value checker

// Napisz funkcję hasValue, która jako argument przyjmuje obiekt i wartość, 
//a następnie zwraca, czy podana wartość znajduje się w obiekcie. Wartość musi mieć postać wartości, nie klucza. 
//Oto kilka przypadków testowych:

// hasValue({"hello": "bonjour", "my": "mon"}, "bonjour") // true
// hasValue({"hello": "bonjour", "my": "mon"}, "hello")   // false
// hasValue({"hello": "bonjour", "my": "mon"}, "tasty")   // false


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
