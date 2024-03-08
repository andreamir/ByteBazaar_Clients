import StyledInfoContainer from './Styled/InfoContainer.js'
import StyledTitleBar from './Styled/TitleBar.js'
import StyledDataSection from './Styled/DataSection.js'
import StyledLink from './Styled/Link.js'
import useToggle from '../../hooks/use-toggle.hook.js'
import useApi from '../../hooks/useApi.js'
import Password from '../Password/Password.jsx'
import { useState, useEffect } from 'react'
import { X as Close } from 'react-feather'

function InfoContainer(props) {
  const { title, details, link, fields, button, reload } = props
  const { data, error, isLoading, getData } = useApi();
  const [edit, toggleEdit] = useToggle(false)
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const update = {}

  function handleInput(e) {
    const key = e.target.name
    const value = e.target.value
    update[key] = value
  }

  function handleSave() {
    setErrorMessage('')
    const petition = {
      route: '/users',
      method: 'PATCH',
      body: update,
    }
    console.log(petition)
    getData(petition)
  }

  useEffect(() => {
    if (typeof data === 'object' && !data.msg) {
      reload()
    }
    if (typeof data === 'object') {
      setMessage(data.msg)
    }
    if (typeof error === 'object') {
      setErrorMessage(error.msg)
    }
  }, [data, error])


  return(
    <StyledInfoContainer key={`${title} container`}>
      {isLoading ? <p>Loading</p> : 
      <>
        <StyledTitleBar key={`${title} bar`}>
          <p className='title'>{title}</p>
          {button && !edit && !message && <button onClick={ toggleEdit }>Editar</button>}
          {edit && !message && <i onClick={ toggleEdit }><Close /></i>}
        </StyledTitleBar>
        {message ? <p>{message}</p> : 
        <>
          <StyledDataSection key={`${title} data section`}>
          {details && Object.keys(details).map((key) => 
            <div key={`${key} div`} className='data'>
              <p key={`${key} label`} className='key'>{key}</p>
              {edit ?
              <input key={`edit ${key} value`}
              type="text"
              name={details[key].ref}
              onChange={ handleInput }
              placeholder={details[key].value}/>
              :
              <p key={`${key} value`} className='value'>{details[key].value}</p>
              }
            </div>
          )}
          {edit && link && fields &&
          <div key='password div' className='data'>
            {fields.map((field) => 
              <>
                <p key={`${field.ref} key`} className='key'>{field.value}</p>
                <Password
                key={field.ref}
                name={field.ref}
                placeholder={field.value}
                handleInput={handleInput}/>
             </>
            )}
          </div>
          }
          </StyledDataSection>
          {errorMessage && <p className='error'>{errorMessage}</p>}
          {edit && 
          <>
            <button className='save' onClick={ handleSave }>Guardar</button>
            <button className='cancel' onClick={ () => { toggleEdit()
              setErrorMessage('')} }>Cancelar</button>
          </>
          }
          {link && !edit && <StyledLink onClick={ toggleEdit }>{link}</StyledLink>}
        </>
      }
      </>
      }
    </StyledInfoContainer>
  )
}

export default InfoContainer