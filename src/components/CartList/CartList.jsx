import { useShoppingListContext } from '../../contexts/ShoppingListContext.jsx'
import './CartList.css'
import { useState, useEffect } from "react";


function CartList() {
  const { cartList, total, addGame, substractGame, deleteGame, confirmedOrder, setConfirmedOrder } = useShoppingListContext()
  

  function clearOrderMessage() {
    setConfirmedOrder('')
  }

  
  return(
    <>
      <ul className="list-group scroll">
      
      { cartList.length === 0 &&
          <li key = {`noItemCart`}className="list-group-item">
          <div className='listContainer'>
            No items added to cart
          </div>
        </li>}
      {cartList.length !== 0 &&
        cartList.map((cartElement,index) => 
        <li key = {`item${index}`}className="list-group-item">
          <div className='listContainer'>
            <img src={cartElement.gameObj.gameTitle_id.image} alt={cartElement.gameObj.title} height={70} width={40}/> 
            <div style={{width: '80%'}}>
                <b>{cartElement.gameObj.gameTitle_id.title}</b> <br/>
                {cartElement.gameObj.platform_id.name} <br/>
                Price: {cartElement.gameObj.price} <br />
                Quantity: {cartElement.qty}
                <div className='info'>
                  <div className='buttonSvg' onClick={()=> substractGame(cartElement.gameObj)}>
                    <svg  className = '' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  </div>
                  <div className='buttonSvg' onClick={() => addGame(cartElement.gameObj)}>
                    <svg className = '' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  </div>
                </div>          
            </div>
            <div>
              <div className='buttonSvg' onClick={() => deleteGame(cartElement.gameObj)}>
                <svg className = 'remove' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </div>
            </div>
          </div>
        </li>)
      }
        {cartList.length !== 0 &&
          <li key ='total' className="list-group-item">
          <div className='total'>
            <div>
              <b>TOTAL </b>
            </div>
            <b>{total} € </b>
          </div>
        </li>
        }
        { confirmedOrder != '' &&
          <li key ='orderResponse' className="list-group-item">
            <div className='listContainer'>          
              <b>{ confirmedOrder === 'Ok' ? 'Order succesfully completed' : confirmedOrder }</b>
              <div>
                      <div className='buttonSvg' onClick={() => clearOrderMessage()}>
                        <svg className = 'remove' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                      </div>
              </div>
              
            </div>
          </li>
        }
             
      </ul>
    </>
  )
}

export default CartList
