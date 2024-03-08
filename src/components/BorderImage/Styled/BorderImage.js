import { styled } from 'styled-components'

const  BorderImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(https://images.pexels.com/photos/7135079/pexels-photo-7135079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  position: relative;
  // background-clip: content-box;
  background-position: bottom;
  background-size: cover;
  border-radius: 24px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 10px;
`

export default BorderImage