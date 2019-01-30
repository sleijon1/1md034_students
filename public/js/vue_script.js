/*function MenuItem(name, cal, ingr, desc){
    this.burgerName = name;
    this.burgerCalories = cal;
    this.burgerIngredient = ingr;
    this.description = desc;

    this.information = [cal, ingr, desc];
    
    this.burger = function(){
        return "Burger: " + 
               this.burgerName + ', ' + this.burgerCalories + ', ' + this.burgerIngredient;
		}
}		
let halloumiBurger = new MenuItem("Halloumi Burger", "0 kcal", "Jalapenos", "Very veggie");
let friedFishBurger = new MenuItem("Fried Fish Burger", "2 kcal", "Omega 333", "Very Fishy");
let definetlyNotABurger = new MenuItem("Definetly not a Burger", "3 kcal", "Sandwich", "Burger Taste"); */

var vm = new Vue({
  el: '#burgerMenu',
  data: {
  	 /* burgers: [ {stock: 2, MenuItem: halloumiBurger},
                 {stock: 1, MenuItem: friedFishBurger},
                 {stock: 22, MenuItem: definetlyNotABurger} ], */
      food
  }
})

