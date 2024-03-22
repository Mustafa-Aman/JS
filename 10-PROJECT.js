// Meal maker
let menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck){
        if(typeof mealToCheck === 'string'){
            return this._meal = mealToCheck;
        }else {
            throw new TypeError("Price must be a string");
        }
    },
    set price(priceTocheck){
        if(typeof priceTocheck === 'number' ){
            return this._price = priceTocheck;
        }else {
            throw new TypeError("Price must be a number");
        }
    },
    get todaysSpecial(){
        if(this._meal && this._price){
            return `Today Special is ${this._meal} for ${this._price}`
        }else{
            return `Meal or price was not set correctly!`
        }
    }
  
}


menu._meal= 'Chicken Tikka';
menu._price= 90 ;

console.log(menu.todaysSpecial);