// MenuItem constructor
function MenuItem(name, cal, ingr, desc, image){
    this.burgerName = name;
    this.burgerCalories = cal;
    this.burgerIngredient = ingr;
    this.description = desc;
    this.imageUrl = image;

    this.information = [cal, ingr, desc];
    
    this.burger = function(){
        return "Burger: " + 
               this.burgerName + ', ' + this.burgerCalories + ', ' + this.burgerIngredient;
		}

    
}

function createBurgers(){
    let halloumiBurger = new MenuItem("Halloumi Burger", "0 kcal", "Gluten", "Very veggie", "https://www.carolinescooking.com/wp-content/uploads/2018/05/halloumi-burger-photo.jpg");
    let friedFishBurger = new MenuItem("Fried Fish Burger", "2 kcal", "Lactose", "Very Fishy", "https://media-cdn.tripadvisor.com/media/photo-s/0e/63/a9/9b/huge-fish-sandwich-4.jpg");
    let definetlyNotABurger = new MenuItem("Definetly not a Burger", "3 kcal", "Sandwich", "Burger Taste", "https://prods3.imgix.net/images/articles/2017_04/Feature-restaurant-butcher-bakery-shops2.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=670");
    let halloumiBurger2 = new MenuItem("Halloumi Burger2", "0 kcal", "Gluten", "Very veggie", "https://www.carolinescooking.com/wp-content/uploads/2018/05/halloumi-burger-photo.jpg");
    let friedFishBurger2 = new MenuItem("Fried Fish Burger2", "2 kcal", "Lactose", "Very Fishy", "https://media-cdn.tripadvisor.com/media/photo-s/0e/63/a9/9b/huge-fish-sandwich-4.jpg");

    
    var burgers = [ {MenuItem: halloumiBurger},
                    {MenuItem: friedFishBurger},
                    {MenuItem: definetlyNotABurger},
                    {MenuItem: halloumiBurger2},
                    {MenuItem: friedFishBurger2},
                  ];

    return burgers;
}

function readForm (){
    var form = document.getElementById("customer-form");
    var customerInfo = [];
    var i;
    
    for (i = 0; i < form.length ;i++) {

        if(form.elements[i].type == 'radio'){
            // Since we check value we will add all radio buttons
            // Must therefore see if checked == true
            if(form.elements[i].checked == true){
                customerInfo.push(form.elements[i].value);            
            }
        }else{
            customerInfo.push(form.elements[i].value);            
        }
    }

    var burgerMenu = document.getElementsByName("burgerChoice");
    var burgerChosen = false;
    var i;
    
    for (i = 0; i < burgerMenu.length; i++) {
        if(burgerMenu[i].checked == true){
            // Maybe change to pop, unshift might be very inefficient
            customerInfo.unshift(burgerMenu[i].value);
            burgerChosen = true;
        }
    }
    // Added this if we want to prompt some message for not choosing a burger
    if(burgerChosen == false){
        console.log("No burger chosen!")
    }

    console.log(customerInfo);
    
    return customerInfo;
}

var vm = new Vue({
  el: '#burgerMenu',
  data: {
      allergic : [{type: "Gluten"}, {type: "Lactose"}],
      burgerNames : [],
      burgerUrls : [],
      burgerInformation : []
  },
    methods: {
        notAllergic : function(ingredient){
            for(var i = 0; i < this.allergic.length; i++){
                if(ingredient == this.allergic[i].type){                
                    return false;
                }
            }
            return true;
        },
        glutenFree : function(information){
            if(information.includes("Gluten")){
                return false; 
            }else{
                return true;
            }
        },
        lactoseFree : function(information){
            if(information.includes("Lactose")){
                return false; 
            }else{
                return true;
            }
        },  
        loadBurgerNames : function(burgers){
            for (var i = 0; i < food.length; i++) {
                this.burgerNames.push(burgers[i].name);
            }
        },
        loadBurgerPictures : function(burgers){
            for (var i = 0; i < food.length; i++) {
                this.burgerUrls.push(burgers[i].Image);
            }        
        },
        loadBurgerIngredients : function(burgers){
            for (var i = 0; i < food.length; i++) {
                this.burgerInformation.push(burgers[i].Information);
            }
        },
        loadBurgersJSON : function(){
            this.loadBurgerNames(food);
            this.loadBurgerPictures(food);
            this.loadBurgerIngredients(food);
        },
        loadBurgers : function(){
            var constructedBurgers = createBurgers();
            for (var i = 0; i < constructedBurgers.length; i++) {
                this.burgerNames.push(constructedBurgers[i].MenuItem.burgerName);
                this.burgerUrls.push(constructedBurgers[i].MenuItem.imageUrl);
                this.burgerInformation.push(constructedBurgers[i].MenuItem.information);
            }
        }
        
    }
})

//vm.loadBurgers();
vm.loadBurgersJSON();

var vm2 = new Vue ({
    el: '#orders',
    methods: {
        markDone: function(){
            console.log("Button Clicked!");
            var formInfoArray = readForm();
            var infoString = "";

            for (var i = 0; i < formInfoArray.length; i++) {
                formInfoArray[i] += "<br>";
                infoString += formInfoArray[i];
            }
            
            document.getElementById("disp-cinfo").innerHTML = infoString;
        }
    }
})
