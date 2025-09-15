const baskets = [
  { name: "Basket 1", hasFruit: false },
  { name: "Basket 2", hasFruit: true },
  { name: "Basket 3", hasFruit: false }
];

const basket1 =  { name: "Basket 1", hasFruit: false }
const basket2 = { name: "Basket 2", hasFruit: false }
const basket3 = { name: "Basket 3", hasFruit: false }

function checkBasket(basketNumber){


 if(basketNumber === 1){
    if(basket1.hasFruit){
        console.log("basket1 has a fruit")
    }else{console.log( "basket1 is empty")}
 } else if(basketNumber === 2){
    if(basket2.hasFruit){
        console.log( "basket2 has a fruit")
    }else{console.log( "basket2 is empty")}
  
 }else if(basketNumber === 3){

    if(basket3.hasFruit){
        console.log ("basket3 has a fruit")
    }else{console.log( "basket3 is empty")}
 }else{
    
    console.log( "invalid basket number" )
    return
 }
 console.log(4)
 
}
checkBasket()

// console.log(checkBasket(1))