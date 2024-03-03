import StyledProfile from './Styled/Profile.js'
import InfoContainer from '../InfoContainer/InfoContainer.jsx'

function Profile(props) {
  const { data } = props
  const parsedUserData = [
    {
      title: 'Información Personal',
      data: {
        Nombre: data.firstName,
        Apellido: data.lastName,
      },
      button: true,
    },
    {
      title: 'Dirección de email',
      data: {
        email: data.email,
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
      data: {
        crédito: data.credit,
        points: data.points,
      },
      button: false,
    }
  ]
  return (
    <StyledProfile>
      <h1>Tu perfil</h1>
      {parsedUserData.map((info) => <InfoContainer
      key={info.title}
      title={info.title}
      data={info.data}
      link={info.link}
      button={info.button} 
      />)
      }
    </StyledProfile>
  )
}

export default Profile