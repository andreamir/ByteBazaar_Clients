import StyledProfile from './Styled/Profile.js'
import InfoContainer from '../InfoContainer/InfoContainer.jsx'

function Profile(props) {
  const { data } = props
  const parsedUserData = [
    {
      title: 'Información Personal',
      details: {
        Nombre: {
          value: data.firstName,
          ref: 'firstName',
        },
        Apellido: {
          value: data.lastName,
          ref: 'lastName',
        },
      },
      button: true,
    },
    {
      title: 'Dirección de email',
      details: {
        email: {
          value: data.email,
          ref: 'email',
        },
      },
      button: true,
    },
    {
      title: 'Contraseña',
      link: 'Restablecer contraseña',
      button: false,
    },
    {
      title: 'Crédito',
      details: {
        crédito: {
          value: data.credit,
          ref: 'credit',
        },
        puntos: {
          value: data.points,
          ref: 'points',
        },
      },
      button: false,
    }
  ]
  
  return (
    <StyledProfile>
      <h1>Tu perfil</h1>
      {parsedUserData.map((info) => <InfoContainer
      key={`${info.title} info`}
      title={info.title}
      details={info.details}
      link={info.link}
      button={info.button} 
      />)
      }
    </StyledProfile>
  )
}

export default Profile