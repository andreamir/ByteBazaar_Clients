import { useState, useEffect } from "react";
import useApi from "./useApi";
import { useShoppingListContext } from "../contexts/ShoppingListContext";
function useBuy() {
  const { getData } = useApi()
  const { cartList } = useShoppingListContext() 
  const productsToBuy = cartList.map((item) => ({
    productId: item.id,
    quantity: item.qty,
  }));

  const order = {
    products: productsToBuy,
    paymentMethod: 'credit'
  }
  console.log(order);
  async function buy() {
    
    const response = await getData({
      route:'/products/buy', 
      method:'POST', 
      body: order})
      console.log(response);
    return response
  }
  return { buy }
  
}

export default useBuy;