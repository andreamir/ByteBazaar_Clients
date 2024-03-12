import './App.css'
import StyledBody from './components/Styled/Body.js'
import StyledContent from './components/Styled/Content.js'
import Banner from './components/Banner/Banner.jsx'
import imageBank from './components/Banner/imageBank/imageBank.js'
import Carousel from './components/Carousel/Carousel.jsx'
import useApi from './hooks/useApi.js'
import { useEffect, useState } from 'react'

function App() {
  const { data, error, isLoading, getData } = useApi()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const petition = {
      route: '/products/all?limit=10&skip=10'
    }
    getData(petition)
  }, [])

  useEffect(() => {
    if (typeof data === 'object') {
      setProducts(data.products)
    }
    // setProducts(data.products)
  }, [data])

  return (
    <>
      <StyledBody>
        <StyledContent>
          {/* <h1>Byte Bazaar 👾</h1> */}
          <div className="bannerWrap">
            <div className='mainBanner'>
              <Banner height='100%' image={imageBank.ad}></Banner>
            </div>
            <div className="sideBanners">
              <Banner height='100%'></Banner>
              <Banner height='100%' image={imageBank.nintendoSwitch}></Banner>
            </div>
          </div>
          <div className="carouselWrap">
            {products && <Carousel data={products}></Carousel>}
          </div>
        </StyledContent>
      </StyledBody>
    </>
  )
}

export default App
