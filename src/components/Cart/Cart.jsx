import { useState } from 'react';
import { useShoppingListContext } from '../../contexts/ShoppingListContext.jsx'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import CartList from '../CartList/CartList.jsx'
import StyledBasket from '../GameCard/Styled/Basket.js'
import imagen from '../GameCard/img/basket.png'
import './Cart.css'

function Cart(props){
    const { tabGames } = useShoppingListContext() 
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [closeTimer, setCloseTimer] = useState(null);

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

    return (
			<>
				<button id='cart' className="btn"  onMouseEnter={togglePopover} onMouseLeave={closePopover}>
          <StyledBasket src={imagen}/>
				</button>
				{
					tabGames.length !== 0 && 
					<Popover placement="bottom" isOpen = {popoverOpen}  target="cart"  toggle={togglePopover} onMouseEnter={cancelClosePopover} onMouseLeave={closePopover} >
							<PopoverHeader className='cartHeader'> CART </PopoverHeader>
							<PopoverBody>
									<CartList/>
							</PopoverBody>
					</Popover>
				}				
			</>
    )
}

export default Cart