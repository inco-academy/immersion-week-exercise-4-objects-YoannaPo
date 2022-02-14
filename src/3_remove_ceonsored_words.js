// 3. Remove Censored Words

// Napisz funkcję rmCensored, która jako argument przyjmuje obiekt, a usuwa wszelkie właściwości, których klucz lub wartość zawiera znak „*”. Musisz zmodyfikować obiekt w miejscu, a nie tworzyć nowego. Oto kilka przypadków testowych:

// const swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"};
// rmCensored(swearWords)
// console.log(swearWords) // { 'sweet jesus': 'doux jesus' }

// const veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
// rmCensored(veggies)
// console.log(veggies) // { potato: 'starch', collard: 'green' } 


function rmCensored(obj) {
  for (let [key, value] of Object.entries(obj)){
    if (key.includes("*") || (value.includes("*"))) {
      delete obj[key];
    }
    
  }
  return obj;
};

const swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"};
rmCensored(swearWords)
console.log(swearWords) // { 'sweet jesus': 'doux jesus' }

const veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
rmCensored(veggies)
console.log(veggies) // { potato: 'starch', collard: 'green' } 

module.exports = rmCensored;
