// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
// validateCred() returns true if the array is a valid credit card number or false if it is not. We'll use the Luhn algorithm to validate the credit card numbers. The algorithm works as follows:
// 1. Starting from the farthest digit to the right, iterate to the left. Double every second digit (the check digit is not doubled).
// 2. If the number is greater than 9 after doubling, subtract 9 from the product.
// 3. Sum all the digits.
// 4. If the sum modulo 10 is equal to 0, then the number is valid; otherwise, it is invalid.
const validateCred = arr => {
    // placeholder for the sum of the digits
    let sum = 0;

    // iterate through the array backwards. the i = arr.length - 1 is array.length - 1 because the last index of an array is always one less than the length of the array. The i-- is to start the loop from the last index of the array and move to the left. The i >= 0 is to stop the loop when it reaches the first index of the array. If we use i > 0, the loop will stop at index 1 and will not process index 0. The i-- is to decrement the index by 1 each time the loop runs.
    for (let i = arr.length - 1; i >= 0; i--) {
        // placeholder for the digit at the current index
        let digit = arr[i];

        // to count the odd/even position from the farthest digit to the right. For example, there are 16 digits in the valid1 array. The farthest digit to the right is at index 15, then the position is 1 (arr.length - i = 16 - 15 = 1). The next digit to the left is at index 14, then the position is 2 (arr.length - i = 16 - 14 = 2) and so on. 
        // The odd/even position is determined by the modulo operator % 2 === 0, which means if the number can be divided by 2 with no remainder, then it is an even number. Ie position 2 divides by 2 with 0 (zero) remainder, so it is an even position. While position 5 divides by 2 with 1 remainder, so it is an odd position. The odd position is not doubled and went straight to the sum line (sum += digit;). 
        if ((arr.length - i) % 2 === 0) {
            // double the digit if it is in an even position
            digit *= 2;

            // if after the doubling, the result digit is greater than 9, then subtract 9 from the result digit. For example, if the digit is 8, then after doubling it becomes 16. Since 16 is greater than 9, we subtract 9 from it to get 7. This is equivalent to adding the digits of the number together (1 + 6 = 7). Then after that went to the next line to add the digit to the sum (sum += digit;).
            if (digit > 9) {
                digit -= 9;
            }
        }

        // add the digit to the sum
        sum += digit;
    }

    return sum % 10 === 0;
  };



// findInvalidCards() takes an array of credit card numbers as input and returns an array of invalid credit card numbers. 
const findInvalidCards = arr => {
    // placeholder for the invalid cards
    let invalidCards = [];
    
    // iterate through the array and check each card
    for (let i = 0; i < arr.length; i++) {
            if (validateCred(arr[i]) === false) {
                invalidCards.push({card: arr[i]});
            }
    }
    
    return invalidCards;
};

// idInvalidCardCompanies() takes an array of invalid credit card numbers as input and returns an array of companies that issued the invalid cards. The function checks the first digit of the card number to determine the company that issued the card.
const idInvalidCardCompanies = arr => {
    // placeholder for the companies that issued the invalid cards
    let companies = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].card[0]) {
            // check the first digit of the card number to determine the company that issued the card. Also check if the company is already in the companies array. If it is not, then add it to the companies array. If it is, then do nothing.
            case 3:
                if (companies.indexOf('Amex') === -1) {
                    companies.push('Amex');
                }
                break;
            case 4:
                if (companies.indexOf('Visa') === -1) {
                    companies.push('Visa');
                }           
                break;
            case 5:
                if (companies.indexOf('Mastercard') === -1) {
                    companies.push('Mastercard');
                }
                break;
            case 6:
                if (companies.indexOf('Discover') === -1) {
                    companies.push('Discover');
                }
                break;
            default:
                if (companies.indexOf('Company not found') === -1) {
                    companies.push('Company not found');
                }
        }
    }
    return companies;
};

const stringToArray = str => 
    {
        return str.split('').map(digit => parseInt(digit));
    };


const validateCardNumber = arr => {
    let fixedArray = [...arr];
    
    // placeholder for the sum of the digits
    let sum = 0;

    // iterate through the array backwards. the i = arr.length - 1 is array.length - 1 because the last index of an array is always one less than the length of the array. The i-- is to start the loop from the last index of the array and move to the left. The i >= 0 is to stop the loop when it reaches the first index of the array. If we use i > 0, the loop will stop at index 1 and will not process index 0. The i-- is to decrement the index by 1 each time the loop runs.
    for (let i = arr.length - 1; i >= 0; i--) {
        // placeholder for the digit at the current index
        let digit = arr[i];

        // to count the odd/even position from the farthest digit to the right. For example, there are 16 digits in the valid1 array. The farthest digit to the right is at index 15, then the position is 1 (arr.length - i = 16 - 15 = 1). The next digit to the left is at index 14, then the position is 2 (arr.length - i = 16 - 14 = 2) and so on. 
        // The odd/even position is determined by the modulo operator % 2 === 0, which means if the number can be divided by 2 with no remainder, then it is an even number. Ie position 2 divides by 2 with 0 (zero) remainder, so it is an even position. While position 5 divides by 2 with 1 remainder, so it is an odd position. The odd position is not doubled and went straight to the sum line (sum += digit;). 
        if ((arr.length - i) % 2 === 0) {
            // double the digit if it is in an even position
            digit *= 2;

            // if after the doubling, the result digit is greater than 9, then subtract 9 from the result digit. For example, if the digit is 8, then after doubling it becomes 16. Since 16 is greater than 9, we subtract 9 from it to get 7. This is equivalent to adding the digits of the number together (1 + 6 = 7). Then after that went to the next line to add the digit to the sum (sum += digit;).
            if (digit > 9) {
                digit -= 9;
            }
        }

        // add the digit to the sum
        sum += digit;
    }

    let mod = sum % 10;
    let lastDigit = arr[arr.length - 1];

    // return true if the sum modulo 10 is equal to 0, otherwise return false
   if (lastDigit >= mod) {
    fixedArray[fixedArray.length - 1] = lastDigit - mod;
    return `to make the card valid, the card number should be ${fixedArray.join('')}.`;

    } else {
    // If subtracting would go below 0, wrap around by adding 10 - mod
    fixedArray[fixedArray.length - 1] = lastDigit - mod + 10;
    return `to make the card valid, the card number should be ${fixedArray.join('')}.`;
  }


};



console.log(validateCardNumber(invalid1)); // should return 5


console.log(stringToArray('4539677908016808')); // should return [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]


// console.log(validateCred(invalid1)); // should return false
// console.log(validateCred(valid1)); // should return true

console.log(findInvalidCards(batch)); // should return all invalid cards

console.log(idInvalidCardCompanies(findInvalidCards(batch))); // should return all companies that issued invalid cards