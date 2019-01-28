var vm = new Vue ({
    function Burger(name, cal, ingr){
        this.burgerName = name;
        this.burgerCalories = cal;
        this.burgerIngredient = ingr;

        this.burger = function(){
            return this.burgerName + ', ' + this.burgerCalories + ', ' + this.burgerIngredient;
        }
    }
})
