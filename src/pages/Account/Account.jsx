import useApi from "../../hooks/useApi"
import { useState, useEffect } from 'react'
import useToggle from '../../hooks/use-toggle.hook';
import LoginModal from '../../components/LoginModal/LoginModal';
import Profile from '../../components/Profile/Profile.jsx'
import StyledBody from '../../components/Styled/Body.js'

function Account() {
  const [showLoginModal, toggleShowLoginModal] = useToggle(false);
  const [details, setDetails] = useState()
  const { data, error, isLoading, getData } = useApi()
  const petition = {
    route: '/users/profile',
  }

  useEffect(() => {
    getData(petition)
  }, [])

  useEffect(() => {
    setDetails(data)
  }, [data])

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
        {details && <Profile reload={reloadData} data={data}></Profile>}
        {showLoginModal && <LoginModal
          handleDismiss={toggleShowLoginModal}
        />}
        {isLoading && <h1>Loading</h1>}
      </StyledBody>
    </>
  )
}

export default Account