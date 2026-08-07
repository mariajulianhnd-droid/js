// Write your code here:
const dogFactory = (name, breed, weight) => {
  // validator for initial input ie dogFactory('Tom', 'cat', 4);
  if (typeof name === 'string' 
  && typeof breed === 'string' 
  && typeof weight === 'number') {
    return {
      _name : name, 
      _breed : breed, 
      _weight : weight,

      // NAME PROPERTY
      // read and format the _name #ps : cannot validate because it's not a function that can take 'if' argument
      // get will run if READING the value ie console.log(name) 
      get name () {
        return this._name;
      },

      // run a function to validate the value before updating the value
      // set function will run if I UPDATE new value ie name = 'Maria';
      // why need second layer of validator if there're validator in prior lines? so that if single value update can be updated ie breed = 'lion'; ---> not a 3 parameters update
      set name (newName) {
        if(typeof newName === 'string'){
          this._name = newName; // doesn't need 'return'
        } else {'Please input text value';}
      },



      // BREED PROPERTY 
      get breed () {
        return this._breed;
      },
      
      set breed (newBreed) {
        if(typeof newBreed === 'string') {
          this._breed = newBreed;
        } else {'Please input text value';}
      },



      // WEIGHT PROPERTY 
      get weight () {
        return this._weight;
      },
      
      set weight (newWeight) {
        if(typeof newWeight === 'number') {
          this._weight = newWeight;
        } else {'Please input number value';}
      },

      bark () {
        return 'ruff! ruff!' ;
      },

      eatTooManyTreats () {
        return this._weight += 1 ;
      }
}
}
}; 

let newDog = dogFactory('Joe', 'Pug', 27);

console.log(newDog.name);
console.log(newDog.breed);
console.log(newDog.weight);

newDog.breed = 'Puddle';
console.log(newDog.breed);
console.log(newDog.bark());
console.log(newDog.eatTooManyTreats());

// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
