import StyledInfoContainer from './Styled/InfoContainer.js'

function InfoContainer(props) {
  const { title, data, link, button } = props
  return(
    <StyledInfoContainer>
      <div className='title'>{title}</div>
      {data && Object.keys(data).map((key) => 
      <>
        <div key={key} className='data'>
          <p key={`${key} key`} className='key'>{key}</p>
          <p key={`${key} value`} className='value'>{data[key]}</p>
        </div>
      </>)
      }
    </StyledInfoContainer>
  )
}

export default InfoContainer