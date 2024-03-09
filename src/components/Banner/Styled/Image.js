import { styled } from 'styled-components'

const Image = styled.div`
  background: ${props => `url(${props.image || 'https://www.imartcity.com/cdn/shop/articles/must_have_gaming_accessories_blog_banner_840x619_8b28da9e-500d-4603-91ca-f1a5805722e4.jpg?v=1624012463'})`};
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-clip: border-box;
  background-size: contain;
  border-radius: inherit;
  box-shadow: inset 4px 6px 17px -6px rgba(0,0,0,0.44);
`

export default Image