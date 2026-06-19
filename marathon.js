let raceNumber = Math.floor(Math.random() * 1000); //randomize the race number between 1-1000
let regEarly = true; //to check if the runner registered early or not
let age = 22; // runner that's above 18 is an adult

if (age > 18 && regEarly) {
  raceNumber += 1000
} // if the runner is an adult and registered early, their race number will be add + 1000


if(age > 18 && regEarly){
  console.log(`Your race starts at 9.30 am with ${raceNumber} as your number`);
  // if the runner is an adult and registered early, their race will start at 9.30 am
}
else if (age >18 && regEarly !== true) {
  console.log(`Your race starts at 11.00 am with ${raceNumber} as your number`);
  // if the runner is an adult and registered late, their race will start at 11 am
}
else if (age <= 18 && age > 0) {
  console.log(`Your race starts at 12.30 pm with ${raceNumber} as your number`);
  // if the runner is not an adult, their race will start at 12.30 pm
}
else {
  console.log('Please go to the registration desk')
  // if the runner's age is missing or unknown, we'll direct them to the registration desk
}