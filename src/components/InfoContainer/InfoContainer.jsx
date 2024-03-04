import StyledInfoContainer from './Styled/InfoContainer.js'
import StyledTitleBar from './Styled/TitleBar.js'
import StyledDataSection from './Styled/DataSection.js'
import StyledLink from './Styled/Link.js'

function InfoContainer(props) {
  const { title, data, link, button } = props
  return(
    <StyledInfoContainer>
      <StyledTitleBar>
        <p className='title'>{title}</p>
        {button && <button>Editar</button>}
      </StyledTitleBar>
      <StyledDataSection>
      {data && Object.keys(data).map((key) => 
      <>
        <div key={key} className='data'>
          <p key={`${key} key`} className='key'>{key}</p>
          <p key={`${key} value`} className='value'>{data[key]}</p>
        </div>
      </>)
      }
      </StyledDataSection>
      {link && <StyledLink>{link}</StyledLink>}
    </StyledInfoContainer>
  )
}

export default InfoContainer