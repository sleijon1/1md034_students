// MenuItem constructor
function MenuItem(name, cal, ingr, desc){
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
let definetlyNotABurger = new MenuItem("Definetly not a Burger", "3 kcal", "Sandwich", "Burger Taste");

var burgers = [ {stock: 2, MenuItem: halloumiBurger},
                {stock: 1, MenuItem: friedFishBurger},
                {stock: 22, MenuItem: definetlyNotABurger} ];

var titleOneDiv = document.getElementsByClassName('box title1');
var titleTwoDiv = document.getElementsByClassName('box title2');
var titleThreeDiv = document.getElementsByClassName('box title3');

var titleOneNode = titleOneDiv[0];
var titleTwoNode = titleTwoDiv[0];
var titleThreeNode = titleThreeDiv[0];

var burgerOne = document.createTextNode(burgers[0].MenuItem.burgerName);
var burgerTwo = document.createTextNode(burgers[1].MenuItem.burgerName);
var burgerThree = document.createTextNode(burgers[2].MenuItem.burgerName);

titleOneNode.appendChild(burgerOne);
titleTwoNode.appendChild(burgerTwo);
titleThreeNode.appendChild(burgerThree);


var myElement = document.getElementsByClassName("box ingredients1");
var myElementNode = myElement[0];

var ingrArray = burgers[0].MenuItem.information;
var list = document.createElement("ul");
for (ingredient in ingrArray)
{
    var listItem = document.createElement("li");
    var listValue = document.createTextNode(ingrArray[ingredient]);
    listItem.appendChild(listValue);
    list.appendChild(listItem);
}
myElementNode.appendChild(list);

var myElement = document.getElementsByClassName("box ingredients2");
var myElementNode = myElement[0];

var ingrArray2 = burgers[1].MenuItem.information;
var list2 = document.createElement("ul");
for (ingredient in ingrArray2)
{
    var listItem = document.createElement("li");
    var listValue = document.createTextNode(ingrArray2[ingredient]);
    listItem.appendChild(listValue);
    list2.appendChild(listItem);
    
}
myElementNode.appendChild(list2);

var myElement = document.getElementsByClassName("box ingredients3");
var myElementNode = myElement[0];

var ingrArray3 = burgers[2].MenuItem.information;
var list3 = document.createElement("ul");

for (ingredient in ingrArray3)
{
    var listItem = document.createElement("li");
    var listValue = document.createTextNode(ingrArray3[ingredient]);
    listItem.appendChild(listValue);
    list3.appendChild(listItem);
}
myElementNode.appendChild(list3);   
