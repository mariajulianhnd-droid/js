let input = 'lieutenant'; 
const vowels = ['a','e','i','o','u'];
let resultArray = [];

/* for(i = 0 ; i < input.length ; i++) {
  console.log(i);
  } */

/* for(j = 0 ; j < vowels.length ; j++) {
  console.log(j);
  } */

for(i = 0 ; i < input.length ; i++) {
  console.log(input[i]);
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }

  for(j = 0 ; j < vowels.length ; j++) {
  // console.log(j);
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }

  }
  }

  const resultString = resultArray.join('').toUpperCase();

  console.log(resultString);
  