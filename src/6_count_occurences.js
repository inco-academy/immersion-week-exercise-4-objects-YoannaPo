// 6. Count Occurences

// Napisz funkcję countOccurences, która jako argument przyjmuje ciąg znaków, a zwraca obiekt. W obiekcie liczba wystąpień danego słowa powiązana jest z tablicą odpowiadających jej słów. Oto kilka przypadków testowych:

// countOccurences("hello is it you hello hello") // {
// // '1': [ 'is', 'it', 'you' ],
// // '3': [ 'hello' ] 
// // }

// countOccurences("hey mama hey mama") // {
// '2': [ 'hey', 'mama' ]
// } 
  
  
  
  function countOccurences(str) {
    const words = str.split(' ');
  
    const wordToCount = {};
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
  
      if (Object.keys(wordToCount).includes(currentWord)) {
          wordToCount[currentWord] += 1;
      } else {
          wordToCount[currentWord] = 1;
      }
    }
  
    
    const occurToWords = {};
    for (const word in wordToCount) {
      const numberOfOccurences = wordToCount[word];
      
      if (Object.keys(occurToWords).includes(numberOfOccurences.toString())) {
          occurToWords[numberOfOccurences].push(word);
      } else {
          occurToWords[numberOfOccurences] = [];
          occurToWords[numberOfOccurences].push(word);
      }
    }
  
    return occurToWords;
  };

  countOccurences("hello is it you hello hello");
  countOccurences("hey mama hey mama");



module.exports = countOccurences;