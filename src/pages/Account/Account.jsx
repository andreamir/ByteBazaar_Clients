import useApi from "../../hooks/useApi"
import { useEffect } from 'react'
import Profile from '../../components/Profile/Profile.jsx'

function Account() {
  const { data, error, isLoading, getData } = useApi()
  const petition = {
    route: '/users/profile',
  }

  useEffect(() => {
    getData(petition)
  }, [])

  function reloadData() {
    getData(petition)
  }

  return(
    <>
      {data && <Profile reload={reloadData} data={data}></Profile>}
      {error && <p>{error.msg}</p>}
      {isLoading && <p>Loading</p>}
    </>
  )
}

export default Account