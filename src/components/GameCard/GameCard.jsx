import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import StyledThumbnailWrapper from './Styled/ThumbnailWrapper.js'
import StyledThumbnail from './Styled/Thumbnail.js'
import StyledDetail from './Styled/Detail.js'
import StyledPlatform from './Styled/Platform.js'
import StyledTitle from './Styled/Title.js'
import StyledPriceBar from './Styled/PriceBar.js'
import StyledAddToCart from './Styled/AddToCart.js'
import StyledBasket from './Styled/Basket.js'

const StyledGameCard = styled.div`
  height: 380px;
  width: 240px;
  background-color: #f9f9f9;
  border: 1px solid #f2f2f2;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition-duration: .8s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.78,.13,.15,.86);
  &:hover{
    transform: scale(1.05);
    transform-origin: center center 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

function GameCard(props) {
  const navigate = useNavigate()
  const { title, image } = props.data.gameTitle_id;
  const platformName = props.data.platform_id.name;
  const { _id, price } = props.data
  return (
    <>
      <StyledGameCard>
        <StyledThumbnailWrapper onClick={ () => { navigate(`/product/${_id}`) }}>
          <StyledThumbnail src={image}/>
        </StyledThumbnailWrapper>
        <StyledDetail>
          <StyledPlatform>{platformName}</StyledPlatform>
          <StyledTitle>{title}</StyledTitle>
          <StyledPriceBar>
            {`${price.toFixed(2)}€`}
            <StyledAddToCart>
              <StyledBasket src='src/components/GameCard/img/basket.png'/>
            </StyledAddToCart>
          </StyledPriceBar>
        </StyledDetail>
      </StyledGameCard>
    </>
  )
}

export default GameCard