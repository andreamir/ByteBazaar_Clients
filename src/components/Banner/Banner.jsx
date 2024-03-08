import { styled } from 'styled-components'
import BorderImage from '../BorderImage/BorderImage.jsx'

const BannerWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 170px;
  margin-bottom: 24px;
`

function Banner() {
  return(
    <BannerWrap>
      <BorderImage/>
    </BannerWrap>
  )
}

export default Banner