import { useState } from 'react';
import { useShoppingListContext } from '../../contexts/ShoppingListContext.jsx'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import useBuy from '../../hooks/useBuy.js';
import CartList from '../CartList/CartList.jsx'
import StyledBasket from '../GameCard/Styled/Basket.js'
import imagen from '../GameCard/img/basket.png'
import './Cart.css'

function Cart(props){
    const { cartList } = useShoppingListContext() 
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [closeTimer, setCloseTimer] = useState(null);
		const { buy } = useBuy();

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

		 function buyButtonHandler(){
			console.log('handler');
			 buy();

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
					cartList.length !== 0 && 
					<Popover placement="bottom" isOpen = {popoverOpen}  target="cart"  toggle={togglePopover} onMouseEnter={cancelClosePopover} onMouseLeave={closePopover} >
							<PopoverHeader className='cartHeader'> CART </PopoverHeader>
							<PopoverBody>
									<CartList/>
									<button onClick={buyButtonHandler}>
										Buy
									</button>
							</PopoverBody>
					</Popover>
				}				
			</>
    )
}

export default Cart