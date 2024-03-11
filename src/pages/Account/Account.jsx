import useApi from "../../hooks/useApi"
import { useEffect } from 'react'
import useToggle from '../../hooks/use-toggle.hook';
import LoginModal from '../../components/LoginModal/LoginModal';
import Profile from '../../components/Profile/Profile.jsx'
import StyledBody from '../../components/Styled/Body.js'

function Account() {
  const [showLoginModal, toggleShowLoginModal] = useToggle(false);
  const { data, error, isLoading, getData } = useApi()
  const petition = {
    route: '/users/profile',
  }

  useEffect(() => {
    getData(petition)
  }, [])

  useEffect(() => {
    if (typeof error === 'object' && error.msg === 'Unauthorised') {
      toggleShowLoginModal(true)
    }
  }, [error])

  function reloadData() {
    getData(petition)
  }

  return(
    <>
      <StyledBody>
        {data && <Profile reload={reloadData} data={data}></Profile>}
        {/* {error && <p>{error.msg}</p>} */}
        {showLoginModal && <LoginModal
          handleDismiss={toggleShowLoginModal}
          // toggleRegisterModal={toggleRegisterModal}
          // toggleRecoveryModal={toggleRecoveryModal}
        />}
        {isLoading && <p>Loading</p>}
      </StyledBody>
    </>
  )
}

export default Account