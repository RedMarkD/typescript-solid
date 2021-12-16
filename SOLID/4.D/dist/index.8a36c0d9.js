class Restaurant {
    constructor(name, preparation){
        this._name = name;
        this._preparation = preparation;
    }
    Cook(item) {
        this._preparation.on();
        this._preparation.cook(item);
        this._preparation.off();
    }
}
class Oven {
    on() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }
    off() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }
    cook(item1) {
        if (this._isOn) {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item1 + " !</p>";
            }, 2000);
            console.log("Now baking " + item1 + "!");
        } else {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    }
}
class Stove {
    on() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE STOVE IS ON!</p>";
        }, 1000);
        console.log("THE STOVE IS ON!"); //insert fart humor here
        this._isOn = true;
    }
    off() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE STOVE IS OFF!</p><hr>";
        }, 3000);
        console.log("THE STOVE IS OFF!"); //insert fart humor here
        this._isOn = false;
    }
    cook(item2) {
        if (this._isOn) {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item2 + " !</p>";
            }, 2000);
            console.log("Now preparing " + item2 + "!");
        } else {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no heat!"); //insert fart humor here
        }
    }
}
let creperie = new Restaurant("Creperie", new Stove());
creperie.Cook("crepes");
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies"); //Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
 /*
let bakery = new Restaurant("Bakery", new Oven));
bakery.Cook("cookies");


 */ 

//# sourceMappingURL=index.8a36c0d9.js.map
