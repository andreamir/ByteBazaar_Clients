import { useState } from 'react';
import { useShoppingListContext } from '../../contexts/ShoppingListContext.jsx'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import useBuy from '../../hooks/useBuy.js';
import ShowToast from '../Toast/Toast.jsx';
import CartList from '../CartList/CartList.jsx'
import StyledBasket from '../GameCard/Styled/Basket.js'
import imagen from '../GameCard/img/basket.png'
import './Cart.css'
import useApi from '../../hooks/useApi.js';

function Cart(props){
    const { cartList, setCartList, setConfirmedOrder } = useShoppingListContext() 
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [closeTimer, setCloseTimer] = useState(null);
    const { buy, data, error, isLoading} = useBuy();

    const togglePopover = () => setPopoverOpen(!popoverOpen);
    const closePopover = () => {
    const timer = setTimeout(() => {
        setPopoverOpen(false);
      }, 200);
      setCloseTimer(timer);
    }

    const cancelClosePopover = () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        setCloseTimer(null);
      }
    };

    const totalBadges = cartList.reduce((tot, element) => {
      return tot + element.qty
    }, 0)

    async function buyButtonHandler(){
			await buy();
			if (data !== undefined) {
				setCartList([]);
				setConfirmedOrder('OK');
			} else {
				setConfirmedOrder(error && error.msg ? error.msg : 'Error');
			}

  }

    return (
      <>
        <div id='cart' onMouseEnter={togglePopover} onMouseLeave={closePopover}>
          <StyledBasket src={imagen}/>
          {totalBadges >0 && 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
              {totalBadges}
          </span>}
        </div>
        {        
          <Popover placement="bottom" isOpen = {popoverOpen}  target="cart"  toggle={togglePopover} onMouseEnter={cancelClosePopover} onMouseLeave={closePopover} >
              <PopoverHeader className='cartHeader'> CART </PopoverHeader>
              <PopoverBody>
                  <CartList/>
                  {cartList.length > 0 && 
										<button type="button" className="btn btn-danger center"  onClick={buyButtonHandler}>
                    	Buy
                  	</button>}
              </PopoverBody>
          </Popover>}
      </>
    )
}

export default Cart