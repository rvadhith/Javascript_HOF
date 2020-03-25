// Function - 1:

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

let modifiedFood = foods.slice(1, 4);

console.log(modifiedFood)


// Function - 2:

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

let modifiedFood = foods.splice(2, 0, "noodles", "icecream");

console.log(foods)


// Function - 3:

const numberArray = [12,324,213,4,2,3,45,4234];

let isEven = numberArray.filter(function(num){
    return num % 2 == 0;
});

console.log(isEven);

let isPrime = numberArray.filter(function(num){
    var factors = 0; 
    for(var divisor = 1; divisor <= num; divisor++){
      if(num % divisor == 0){
        factors = factors + 1;
      }
    }
    if(num <= 1 || num == 2 || factors < 3){
      return num;
    }
});

console.log(isPrime);

// Function - 4:

const numberArray = [12,324,213,4,2,3,45,4234];


let nonPrime = numberArray.filter(function(num){
    var factors = 0; 
    for(var divisor = 1; divisor <= num; divisor++){
      if(num % divisor == 0){
        factors = factors + 1;
      }
    }
    if(!(num <= 1 || num == 2 || factors < 3)){
      return num;
    }
});

console.log(nonPrime);

// Function - 5:

const numberArray = [12,324,213,4,2,3,45,4234];

let isEven = numberArray.filter(num => num % 2 == 0);
                                
console.log(isEven);

// Function - 6:

const myArray = [11, 34, 20, 5, 53, 16];

let findSquareOfNumbers = myArray.map(function(num) {
  return num * num;
});

console.log(findSquareOfNumbers);

// Function - 7:

const myArray = [2, 3, 5, 10];

let multiply = myArray.reduce(function(accumulator, currentValue) {
  return accumulator * currentValue;
});

console.log(multiply);