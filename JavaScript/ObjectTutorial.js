// Create an object:
var car = {
    type: "Fiat", 
    model: "500",        
    color: "white",
    typeModel : function() {
        return this.type + " " + this.model;
    }
};

// Display some data from the object:
document.getElementById("demo").innerHTML = "The car is a " + car.typeModel();
