import StyledProfile from './Styled/Profile.js'
import InfoContainer from '../InfoContainer/InfoContainer.jsx'

function Profile(props) {
  const { data, reload } = props
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
      fields: [
        {
          value: 'Introduce tu vieja contraseña',
          ref: 'password',
        },
        {
          value: 'Introduce tu nueva contraseña',
          ref: 'newPassword',
        },
        {
          value: 'Confirma tu nueva contraseña',
          ref: 'repeatedNewPassword',
        },
      ],
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
          value: data.points || 0,
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
      fields={info.fields}
      reload={reload}
      />)
      }
    </StyledProfile>
  )
}

export default Profile