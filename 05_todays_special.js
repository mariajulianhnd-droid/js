//THE RED CHICKZ SPECIAL MENU MAKER


//Since there's a lot of menus, we'll list the items as arrays & state the special menu for many menus at once
const menu = {
  _meal : [], //  The menu placeholder & shouldn't be changed
  _price : [] , // The price placeholder & shouldn't be changed

  // Meals property : make sure the meal is an array & consist of string value. If yes, the value will be assigned to _meal
  set meals(mealToCheck) {
    if (Array.isArray(mealToCheck) && mealToCheck.every(item => typeof item === 'string')){
      return this._meal = mealToCheck; 
    } else {return this._meal = this._meal;}
  },

  // Prices property : Make sure the price is an array & consist of number value. If yes, the value will be assigned to _price
  set prices(priceToCheck) {
    if (Array.isArray(priceToCheck) && priceToCheck.every(item => typeof item === 'number')){
      return this._price = priceToCheck;
    } else {return this._price = this._price;}
  },

  // todaysSpecial : if _meal & _price are updated and the length is the same (means the menu-price pair matched), then we'll create an array variable called 'specials'
  get todaysSpecial() {
    if (this._meal.length > 0
        && this._price.length > 0 
        && this._meal.length === this._price.length) {
          if (this._meal.length === 1) {
            return `Today\'s Special menu is ${this._meal[0]} for $${this._price[0]}!`;
          }

          else {
          // 'specials' array will consists of console leg strings that are pushed repetitively based on the length of the updated _meal & _price arrays 
          let specials = [];
          for(let i = 0; i < this._meal.length; i++){
              specials.push
              (`${i+1}) ${this._meal[i]} for $${this._price[i]}!`);
              }  

          // Every loop will be join with \n (new line)
  
          return 'Today\'s Special menu are:\n' + specials.join('\n');

          }
          } else {return 'Meal or price was not set correctly!'}
          }
};

//DEMO 1
// We assign 3 string items on menu.meals
menu.meals = ['Honey Butter Sandwich','Chicken Tenders & Wings','Potato Wedges'];
// We assign 3 number items on menu.prices
menu.prices = [13.50, 14.00, 4.00];
//Output : 3 lines of Today's Special
console.log (menu.todaysSpecial);


/* //DEMO 2
// We assign 3 string items on menu.meals
menu.meals = ['Honey Butter Sandwich','Chicken Tenders & Wings','Potato Wedges'];
// We assign 3 number items on menu.prices
menu.prices = [13.50, 14.00, 'name'];
//Output : Meal or price was not set correctly!
console.log (menu.todaysSpecial); */


/* //DEMO 3
// We assign 2 string items on menu.meals
menu.meals = ['Honey Butter Sandwich','Chicken Tenders & Wings',12345];
// We assign 3 number items on menu.prices
menu.prices = [13.50, 14.00, 4.00];
//Output : Meal or price was not set correctly!
console.log (menu.todaysSpecial); */


/* //DEMO 4
// We assign 1 string items on menu.meals
menu.meals = ['Honey Butter Sandwich'];
// We assign 1 number items on menu.prices
menu.prices = [13.50];
//Output : 1 line of Today's Special
console.log (menu.todaysSpecial); */