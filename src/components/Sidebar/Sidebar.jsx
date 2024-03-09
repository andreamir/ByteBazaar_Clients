import useApi from "../../hooks/useApi"
import { useEffect, useState } from 'react'
import SidebarComponent from "./SidebarComponent";

function Sidebar(props){
  const genresHook = useApi();
  const platformsHook = useApi();
  const { error, isLoading } = useApi()
  const gameData  = props.gameData;

  const [genres, useGenres] = useState();
  const [platforms, usePlatforms] = useState();

  async function fetchGenres() {
    await genresHook.getData({ route: `/genres/all` });
  }
  async function fetchPlatforms() {
    await platformsHook.getData({ route: `/platforms/all` });
  }

  useEffect(() => {
    const genresAsync = async () => {
      await fetchGenres();
    };
    genresAsync();
  }, [])

  useEffect(() => {
    const platformsAsync = async () => {
      await fetchPlatforms();
    };
    platformsAsync();
  }, [])

  useEffect(() => {
    if (genresHook === undefined || genresHook.data === undefined) {
      return
    }
    useGenres( genresHook.data)
  }, [genresHook])

  useEffect(() => {
    if (platformsHook === undefined || platformsHook.data === undefined) {
      return
    }
    usePlatforms(platformsHook.data)
  }, [platformsHook])

  
  return(
    <>
      {genres && platforms && <SidebarComponent platformsData={platforms} genresData={genres} gameData={gameData}></SidebarComponent>}
      {error && <p>{error.msg}</p>}
      {isLoading && <p>Loading</p>}
    </>
  )
}

export default Sidebar