// 2. Sort Words

// Napisz funkcję sortWords, która przyjmuje jako argument tablicę ciągów znakowych i zwraca obiekt. 
// Obiekt ma dwa klucze: „odd” i „even”. Klucz „odd” powiązany jest z tablicą ciągów o długości nieparzystej. 
// Klucz „even” powiązany jest z tablicą ciągów o długości parzystej. Oto kilka przypadków testowych:
//sortWords([]) // {
// odd:  [],
// even: []
// }

//sortWords(["work", "hard", "mommy"]) // {
// odd:  [ 'mommy' ],
// even: [ 'work', 'hard' ]
// }

//sortWords(["oh!", "ah!", "hi", "my"]) // {
// odd:  [ 'oh!', 'ah!' ],
// even: [ 'hi', 'my' ] 
// }



function sortWords(arr) {
  const Obj = {
    "odd": [],
    "even": []
  }

  for (let i=0; i<arr.length; i++) {
    console.log(arr);
    if(arr[i].length % 2 === 0 ){
      Obj.even.push(arr[i]);

    } else  {
      console.log("Odd");
    }
  }

  };

sortWords(["oh!", "ah!", "hi", "my"]);

module.exports = sortWords;