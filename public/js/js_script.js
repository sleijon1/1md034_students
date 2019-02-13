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
    let halloumiBurger = new MenuItem("Halloumi Burger", "0 kCal", "Gluten", "Very veggie", "https://www.carolinescooking.com/wp-content/uploads/2018/05/halloumi-burger-photo.jpg");
    let friedFishBurger = new MenuItem("Fried Fish Burger", "2 kCal", "Lactose", "Very Fishy", "https://media-cdn.tripadvisor.com/media/photo-s/0e/63/a9/9b/huge-fish-sandwich-4.jpg");
    let definetlyNotABurger = new MenuItem("Definetly not a Burger", "3 kCal", "Sandwich", "Burger Taste", "https://prods3.imgix.net/images/articles/2017_04/Feature-restaurant-butcher-bakery-shops2.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=670");
    let halloumiBurger2 = new MenuItem("Halloumi Burger2", "0 kCal", "Gluten", "Very veggie", "https://www.carolinescooking.com/wp-content/uploads/2018/05/halloumi-burger-photo.jpg");
    let friedFishBurger2 = new MenuItem("Fried Fish Burger2", "2 kCal", "Lactose", "Very Fishy", "https://media-cdn.tripadvisor.com/media/photo-s/0e/63/a9/9b/huge-fish-sandwich-4.jpg");

    
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
    for (var i = 0; i < burgers.length; i++) {
        var burgerMenuDiv = document.getElementsByClassName('wrapper')[0];
        
        // Burger Title
        var titleDiv = document.createElement('div');
        titleDiv.className = 'box title';
        var burgerName = document.createTextNode(burgers[i].MenuItem.burgerName);
        titleDiv.appendChild(burgerName);
        burgerMenuDiv.appendChild(titleDiv);

        // Burger Image
        var imageDiv = document.createElement('div');
        imageDiv.className = 'box picture';
        var imageElement = document.createElement("IMG");
        imageElement.setAttribute("src", burgers[i].MenuItem.imageUrl);
        imageElement.setAttribute("width", "225");
        imageElement.setAttribute("height", "168");
        imageDiv.appendChild(imageElement);
        burgerMenuDiv.appendChild(imageDiv);
        
        // Burger Ingredients
       // var ingrNode = document.getElementsByClassName('box ingredients' + i)[0];
        var ingrDiv = document.createElement('div');
        ingrDiv.className = 'box ingredients';
        var ingrArray = burgers[i].MenuItem.information;
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
        ingrDiv.appendChild(list);

        if(glutenFree){
            var glutenFreeText = document.createTextNode('Gluten Free');
            appendListItem(list, glutenFreeText)
        }
        if(lactoseFree){
            var lactoseFreeText = document.createTextNode('Lactose Free');
            appendListItem(list, lactoseFreeText)
        }

        burgerMenuDiv.appendChild(ingrDiv);

        var burgerSelectDiv = document.createElement('div');
        burgerSelectDiv.className = 'box selectBurger';
        var burgerCheckbox = document.createElement("INPUT");
        burgerCheckbox.setAttribute("type", "checkbox");
        burgerCheckbox.setAttribute("name", "burgerChoice");
        burgerCheckbox.setAttribute("id", burgers[i].MenuItem.burgerName);
        burgerCheckbox.setAttribute("value", burgers[i].MenuItem.burgerName);
        burgerSelectDiv.appendChild(burgerCheckbox);
        burgerMenuDiv.appendChild(burgerSelectDiv);
        
    }

}

function displayBurgersJSON(){
    for (var i = 0; i < food.length; i++) {
        var burgerMenuDiv = document.getElementsByClassName('wrapper')[0];
        
        // Burger Title
        var titleDiv = document.createElement('div');
        titleDiv.className = 'box title';
        var burgerName = document.createTextNode(food[i].name);
        titleDiv.appendChild(burgerName);
        burgerMenuDiv.appendChild(titleDiv);
        

        // Burger Image
        var imageDiv = document.createElement('div');
        imageDiv.className = 'box picture';
        var imageElement = document.createElement("IMG");
        imageElement.setAttribute("src", food[i].Image);
        imageElement.setAttribute("width", "225");
        imageElement.setAttribute("height", "168");
        imageDiv.appendChild(imageElement);
        burgerMenuDiv.appendChild(imageDiv);

        // Burger Ingredients
        var ingrDiv = document.createElement('div');
        ingrDiv.className = 'box ingredients';
        var ingrArray = food[i].Information;
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
        ingrDiv.appendChild(list);

        if(glutenFree){
            var glutenFreeText = document.createTextNode('Gluten Free');
            appendListItem(list, glutenFreeText)
        }
        if(lactoseFree){
            var lactoseFreeText = document.createTextNode('Lactose Free');
            appendListItem(list, lactoseFreeText)
        }
        burgerMenuDiv.appendChild(ingrDiv);

        var burgerSelectDiv = document.createElement('div');
        burgerSelectDiv.className = 'box selectBurger';
        var burgerCheckbox = document.createElement("INPUT");
        burgerCheckbox.setAttribute("type", "checkbox");
        burgerCheckbox.setAttribute("name", "burgerChoice");
        burgerCheckbox.setAttribute("id", food[i].name);
        burgerCheckbox.setAttribute("value", food[i].name);
        burgerSelectDiv.appendChild(burgerCheckbox);
        burgerMenuDiv.appendChild(burgerSelectDiv);
    }
   
}


//displayBurgers();

displayBurgersJSON();


function readForm (){
    var customerInfo = readCustomerInfo();

    var orderedBurgers = readBurgers();
    
    for (i = 0; i < orderedBurgers.length; i++) {
            customerInfo.unshift(orderedBuregers[i]);
        }

    console.log(customerInfo);
    
    return customerInfo;
}


function readCustomerInfo(){
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

    return customerInfo;
}

function readBurgers(){
    var orderedBurgers = [];
    
    var burgerMenu = document.getElementsByName("burgerChoice");
    var burgerChosen = false;
    var i;
    
    for (i = 0; i < burgerMenu.length; i++) {
        if(burgerMenu[i].checked == true){
            // Maybe change to pop, unshift might be very inefficient
            orderedBurgers.push(food[i].name);
            burgerChosen = true;
        }
    }
    // Added this if we want to prompt some message for not choosing a burger
    if(burgerChosen == false){
        console.log("No burger chosen!")
    }
    return orderedBurgers;
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
