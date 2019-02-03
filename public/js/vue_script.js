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
      food,
      allergic : [{type: "Gluten"}, {type: "Lactose"}]
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
        }
        
    }
})

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
