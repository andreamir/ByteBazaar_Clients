import { styled } from 'styled-components'
import StyledBorderImage from './Styled/BorderImage.js'
import StyledImageContainer from './Styled/ImageContainer.js'
import StyledImage from './Styled/Image.js'

const BannerWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${ props => props.height || '170px;'};
  // margin-bottom: 24px;
  cursor: pointer;
`

function Banner(props) {
  const { height, image } = props
  return(
    <BannerWrap height={height}>
      <StyledBorderImage>
        <StyledImageContainer>
          <StyledImage image={image} />
        </StyledImageContainer>
      </StyledBorderImage>
    </BannerWrap>
  )
}

export default Banner