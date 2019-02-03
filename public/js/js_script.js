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
    let halloumiBurger2 = new MenuItem("Halloumi Burger 2", "0 kcal", "Jalapenos", "Very veggie");
    let friedFishBurger2 = new MenuItem("Fried Fish Burger 2", "2 kcal", "Omega 333", "Very Fishy");
    
    var burgers = [ {MenuItem: halloumiBurger},
                    {MenuItem: friedFishBurger},
                    {MenuItem: definetlyNotABurger},
                    {MenuItem: halloumiBurger2},
                    {MenuItem: friedFishBurger2},
                  ];

    return burgers;
}

function appendListItem(listNode, textNode){
            var listItem = document.createElement("li");
            var paragraph = document.createElement("P");
            paragraph.appendChild(textNode);
            listItem.appendChild(paragraph);
            listNode.appendChild(listItem);    
}

function displayBurgers(){
    var burgers = createBurgers();
    for (var i = 1; i < 4; i++) {
        // Burger Title
        var titleNode = document.getElementsByClassName('box title' + i)[0];
        var burgerName = document.createTextNode(burgers[i-1].MenuItem.burgerName);
        titleNode.appendChild(burgerName);

        // Burger Image
        var imageNode = document.getElementsByClassName('box picture' + i)[0];
        var imageElement = document.createElement("IMG");
        imageElement.setAttribute("src", burgers[i-1].MenuItem.imageUrl);
        imageElement.setAttribute("width", "225");
        imageElement.setAttribute("height", "168");
        imageNode.appendChild(imageElement);

        // Burger Ingredients
        var ingrNode = document.getElementsByClassName('box ingredients' + i)[0];
        var ingrArray = burgers[i-1].MenuItem.information;
        var list = document.createElement("ul");
        var glutenFree = true;
        var lactoseFree = true;

        for (ingredient in ingrArray)
        {
            var listItem = document.createElement("li");
            var tmpIngredient = ingrArray[ingredient];
            var paragraph = document.createElement("P");

            
            if(tmpIngredient == "Gluten" || tmpIngredient == "Lactose"){

                tmpIngredient == "Gluten" ? glutenFree = false : lactoseFree = false;
                var textNode = document.createTextNode(tmpIngredient);
                var containsNode = document.createTextNode('Contains ');
                bold = document.createElement("B");
                bold.appendChild(textNode);
                paragraph.appendChild(containsNode);
                paragraph.appendChild(bold);
                
            }else{
                var listItemValue = document.createTextNode(tmpIngredient);                      
                paragraph.appendChild(listItemValue);                
            }

            
            listItem.appendChild(paragraph);
            list.appendChild(listItem);
        }
        ingrNode.appendChild(list);

        if(glutenFree){
            var glutenFreeText = document.createTextNode('Gluten Free');
            appendListItem(list, glutenFreeText)
        }
        if(lactoseFree){
            var lactoseFreeText = document.createTextNode('Lactose Free');
            appendListItem(list, lactoseFreeText)
        }

    }


}

function displayBurgersJSON(){
    for (var i = 1; i < 4; i++) {
        // Burger Title
        var titleNode = document.getElementsByClassName('box title' + i)[0];
        var burgerName = document.createTextNode(food[i-1].name);
        titleNode.appendChild(burgerName);

        // Burger Image
        var imageNode = document.getElementsByClassName('box picture' + i)[0];
        var imageElement = document.createElement("IMG");
        imageElement.setAttribute("src", food[i-1].Image);
        imageElement.setAttribute("width", "225");
        imageElement.setAttribute("height", "168");
        imageNode.appendChild(imageElement);

        // Burger Ingredients
        var ingrNode = document.getElementsByClassName('box ingredients' + i)[0];
        var ingrArray = food[i-1].Information;
        var list = document.createElement("ul");
        var glutenFree = true;
        var lactoseFree = true;

        for (ingredient in ingrArray)
        {
            var listItem = document.createElement("li");
            var tmpIngredient = ingrArray[ingredient];
            var paragraph = document.createElement("P");

            
            if(tmpIngredient == "Gluten" || tmpIngredient == "Lactose"){

                tmpIngredient == "Gluten" ? glutenFree = false : lactoseFree = false;
                var textNode = document.createTextNode(tmpIngredient);
                var containsNode = document.createTextNode('Contains ');
                bold = document.createElement("B");
                bold.appendChild(textNode);
                paragraph.appendChild(containsNode);
                paragraph.appendChild(bold);
                
            }else{
                var listItemValue = document.createTextNode(tmpIngredient);                      
                paragraph.appendChild(listItemValue);                
            }

            
            listItem.appendChild(paragraph);
            list.appendChild(listItem);
        }
        ingrNode.appendChild(list);

        if(glutenFree){
            var glutenFreeText = document.createTextNode('Gluten Free');
            appendListItem(list, glutenFreeText)
        }
        if(lactoseFree){
            var lactoseFreeText = document.createTextNode('Lactose Free');
            appendListItem(list, lactoseFreeText)
        }

    }
    
}


//displayBurgers();

displayBurgersJSON();


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
            customerInfo.unshift(food[i].name);
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

function markDone(){
    console.log("Button Clicked!");
    var formInfoArray = readForm();
    var infoString = "";

    for (var i = 0; i < formInfoArray.length; i++) {
        formInfoArray[i] += "<br>";
        infoString += formInfoArray[i];
    }
    
    document.getElementById("disp-cinfo").innerHTML = infoString;
}
