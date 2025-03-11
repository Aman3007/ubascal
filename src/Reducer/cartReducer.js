import { act } from "react";
import FormatPrice from "../Helper/FormatPrice";

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
     
  let existingProduct=state.cart.find((curItem)=>curItem.id==id+color);

if(existingProduct){

  let updatedProduct=state.cart.map((curElem)=>{
    if(curElem.id==id+color){
      let newAmount=curElem.amount+amount;

if(newAmount>=curElem.max){
  newAmount=curElem.max;
}

      return{
        ...curElem,
       amount:newAmount, 
      }
    }
    else{
      return curElem;
    }
    
  })
  return {
    ...state,
    cart: updatedProduct,
  };
}

else{
  let cartProduct;
  
  cartProduct = {
    id: id + color,
    name: product.name,
    color,
    amount,
    image: product.image[0].url,
    price: product.price,
    max: product.stock,
  };

  return {
    ...state,
    cart: [...state.cart, cartProduct],
  };
}
     
    }
  
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
  
if(action.type==="CLEAR_CART"){
  return{
    ...state,
    cart:[],
  }
}

if(action.type=="SET_INCREMENT"){
let updatedProduct=state.cart.map((curElem)=>{
  if(curElem.id==action.payload){
   let inAmount=curElem.amount+1;

   if(inAmount>=curElem.max){
    inAmount=curElem.max;
  }

   return{
    ...curElem,
    amount:inAmount,
   }
  }else{
    return curElem;
  }
})

return {
  ...state,cart:updatedProduct,
}
}


if(action.type=="SET_DECREMENT"){
  let updatedProduct=state.cart.map((curElem)=>{
    if(curElem.id==action.payload){
     let decAmount=curElem.amount-1;

     if(decAmount<=0){
      decAmount=0;
    }
     return{
      ...curElem,
      amount:decAmount,
     }
    }else{
      return curElem;
    }
  })
  
  return {
    ...state,cart:updatedProduct,
  }
  }


if(action.type=="CART_UPDATE"){

  let updateProduct=state.cart.reduce((initialval,curElem)=>{
let {amount}=curElem;
initialval=initialval+amount;
return initialval;
  },0)
  return{
    ...state,
    total_item:updateProduct,
  }
}

if(action.type=="TOTAL_PRICE"){

  let updateProduct=state.cart.reduce((initialval,curElem)=>{
let {price,amount}=curElem;
initialval=(initialval+price)*amount;
return initialval;
  },0)
  return{
    ...state,
    total_price:updateProduct,
  }
}







    return state;
  };
  
  export default cartReducer;