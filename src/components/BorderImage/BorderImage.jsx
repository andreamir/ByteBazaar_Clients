import StyledBorderImage from './Styled/BorderImage.js'
import StyledImageContainer from './Styled/ImageContainer.js'
import StyledImage from './Styled/Image.js'

function BorderImage() {
  return(
    <>
      <StyledBorderImage>
        <StyledImageContainer>
          <StyledImage></StyledImage>
          {/* <img 
          className='bannerImage'
          src="https://assets.nintendo.eu/image/upload/c_scale,f_auto,q_auto/NAL/Homepage/Homepage_Consoles_Banner_2.png" 
          /> */}
        </StyledImageContainer>
      </StyledBorderImage>
    </>
  )
}

export default BorderImage