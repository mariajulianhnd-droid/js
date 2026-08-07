// FACTORIAL FUNCTION 
// Write a function factorial() that takes a number as an argument and returns the factorial of the number.

/* Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 

Assume only positive numbers will be given as an argument for the factorial() function. */

/* 
const factorial = val => {
    let result = 1;
    for (i = val ; i > 0 ; i--){
        result *= i;
    }
    
    return result;
    
};

console.log(factorial(6)); */


// SUBLENGTH FUNCTION
// Write a function subLength() that takes two parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the two characters. If there are less than two or more than two occurrences of the character the function should return 0.

/* const subLength = (str, char) => {
  let occur = [];
  let result = 0 ;
  for (let i = 0 ; i < str.length ; i ++) {
    if (str[i] === char) {
      occur.push(i);
    } 
  };

  return occur.length === 2 ? occur[1] - occur[0] + 1 : 0;  
  };

console.log(subLength('Saturday', 'a'));
console.log(subLength('summer', 'm'));
console.log(subLength('digitize', 'i'));
console.log(subLength('cheesecake', 'k')); */

/* subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0  */


// GROCERIES FUNCTION
// Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where appropriate.
// Write function below
const groceries = arr => {
  if (arr.length > 2) {
    let newArray = [];
    for (let i = 0 ; i < (arr.length - 1) ; i++){
      newArray.push(arr[i].item);
    }
    return newArray.join(', ') + ' and ' + arr[arr.length-1].item;
  } 
  else if (arr.length === 2) {
    return arr[0].item + ' and ' + arr[1].item;
  }
  else {return arr[0].item;}
};

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
