import StyledInfoContainer from './Styled/InfoContainer.js'
import StyledTitleBar from './Styled/TitleBar.js'
import StyledDataSection from './Styled/DataSection.js'
import StyledLink from './Styled/Link.js'
import useToggle from '../../hooks/use-toggle.hook.js'
import useApi from '../../hooks/useApi.js'
import { useState, useEffect } from 'react'

function InfoContainer(props) {
  const { title, details, link, button } = props
  const [edit, toggleEdit] = useToggle(false)
  // const [update, setUpdate] = useState({})
  // const [key, setKey] = useState('')
  // const [value, setValue] = useState('')
  const update = {}
  const { data, error, isLoading, getData } = useApi();

  function handleInput(e) {
    const key = e.target.name
    const value = e.target.value
    update[key] = value
  }

  function handleSave() {
    const petition = {
      route: '/users',
      method: 'PATCH',
      body: update,
    }
    console.log(petition)
    getData(petition)
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  

  return(
    <StyledInfoContainer key={`${title} container`}>
      {isLoading ? <p>Loading</p> : 
      <>
        <StyledTitleBar key={`${title} bar`}>
          <p className='title'>{title}</p>
          {button && !edit && <button onClick={ toggleEdit }>Editar</button>}
          {button && edit && <button onClick={ toggleEdit }>x</button>}
        </StyledTitleBar>
        <StyledDataSection key={`${title} data section`}>
        {details && Object.keys(details).map((key) => 
        <>
          <div key={`${key} div`} className='data'>
            <p key={`${key} label`} className='key'>{key}</p>
            {edit ?
            <input key={`edit ${key} value`}
            type="text"
            name={details[key].ref}
            onKeyUp={ handleInput }
            placeholder={details[key].value}/>
            :
            <p key={`${key} value`} className='value'>{details[key].value}</p>
            }
          </div>
        </>)}
        </StyledDataSection>
        {edit && 
        <>
          <button onClick={ handleSave }>Guardar</button>
          <button onClick={ toggleEdit }>Cancelar</button>
        </>
        }
        {link && <StyledLink>{link}</StyledLink>}
      </>
      }
    </StyledInfoContainer>
  )
}

export default InfoContainer