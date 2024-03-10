import { useContext, createContext, useState, useEffect } from "react"

const ShoppingListContext = createContext();

function ShoppingListProvider(props) {
  const { children } = props
  const [tabGames, setTabGames] = useState([])
  const [cartList, setCartList] = useState([])
  const [confirmedOrder, setConfirmedOrder] = useState('');
  const [total, setTotal] = useState(0)

  function addGame(game) {
    const ids = tabGames.map(tabGame => tabGame._id)
    setTabGames([...tabGames, game]);
  }
  function substractGame(game) {
    let firstOcurrence = false;
    const newTabGames = [...tabGames].filter(tabGame => {
      if (!firstOcurrence && tabGame._id === game._id ) {
        firstOcurrence = true;
        return false;
      }
      return true;
    })
    setTabGames(newTabGames);
  }

  function deleteGame(game) {
    setTabGames(tabGames => tabGames.filter(tabGame => tabGame._id !== game._id))
  }

  function generateCartList() {
    const counter = tabGames.reduce((acc, game)=> {
      acc[game._id] = (acc[game._id] || 0) + 1;
      return acc;
    }, {});


    const newCartList = Object.keys(counter).map(_id => ({
    id: _id,
    gameObj: tabGames.find(game => game._id === _id),
    qty: counter[_id]
    }));
    setCartList(newCartList)
  }

  useEffect(()=>{
    generateCartList();
  }, [tabGames])

  function calculateTotal() {
    let total = cartList.reduce((tot, item) => {
      return tot + (item.qty * item.gameObj.price);
    }, 0);
    setTotal(total);
  }
  
  useEffect(()=>{
    calculateTotal();
  }, [cartList])
  
  return(
    <ShoppingListContext.Provider value = {{tabGames, setCartList, cartList, confirmedOrder, setConfirmedOrder, total, addGame, deleteGame, substractGame}}>
      { children }
    </ShoppingListContext.Provider>
  )
}

function useShoppingListContext() {
  const context = useContext(ShoppingListContext)
  if(!context){
    throw new Error('useShoppingListContext must be used within ShoppingListContextProvider')
  }
  return context
}

export { ShoppingListProvider, useShoppingListContext }