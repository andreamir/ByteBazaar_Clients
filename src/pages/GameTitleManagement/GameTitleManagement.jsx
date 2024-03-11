import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext'
import useApi from '../../hooks/useApi'

const initialGameTitle = {
  title: '',
  description: '',
  image: '',
  genres: ['action']
}

function GameTitleManagement() {
  const { loggedUser } = useAuthContext()
  const navigate = useNavigate()
  const gameTitleHook = useApi()
  const [gameTitle, setGameTitle] = useState(initialGameTitle)

  useEffect(() => {
    if (gameTitleHook.data) {
      console.log(gameTitleHook.data);
    }

    if (gameTitleHook.error) {
      console.error(gameTitleHook.error);
    }

  }, [gameTitleHook.data, gameTitleHook.error])

  useEffect(() => {
    if (!localStorage.token || !loggedUser.isAdmin) {
      navigate('/')
    }
  }, [])

  function onChangeHandler({ value, key }) {
    setGameTitle({ ...gameTitle, [key]: value })
  }

  function onClickHandler() {
    const createGameTitleItem = {
      route: '/gameTitles/create',
      method: 'POST', 
      body: gameTitle
    }

    gameTitleHook.getData(createGameTitleItem)
  }

  return (
    <>
      <input
        type='text'
        placeholder="Insert the title"
        value={ gameTitle.title }
        onChange={ (e) => onChangeHandler({ value: e.target.value, key: 'title' }) }
      />
      <input
        type='text'
        placeholder="Insert the descripcion"
        value={ gameTitle.description }
        onChange={ (e) => onChangeHandler({ value: e.target.value, key: 'description' }) }
      />
      <input
        type='text'
        placeholder="Insert the url of an image"
        value={ gameTitle.image }
        onChange={ (e) => onChangeHandler({ value: e.target.value, key: 'image' }) }
      />
      {/* <img src="" alt="" /> */}
      <button onClick={ () => onClickHandler() }>Create Game Title</button>
      <p>{JSON.stringify(gameTitle)}</p>
    </>
  )
}

export default GameTitleManagement
