import { useState, useEffect } from "react";
import useApi from "./useApi";
import { useShoppingListContext } from "../contexts/ShoppingListContext";

function useBuy() {
  const { data, error, isLoading, getData } = useApi()
  const { cartList, setCartList } = useShoppingListContext()
  const  productsToBuy = cartList.map((item) => ({
    productId: item.id,
    quantity: item.qty,
  }));

  const order = {
    products: productsToBuy,
    paymentMethod: 'credit'
  }

  async function buy() {

    const response = await getData({
      route:'/products/buy', 
      method:'POST', 
      body: order})
      
  }
  return { buy, data, error, isLoading}
}

export default useBuy