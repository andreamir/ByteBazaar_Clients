import './demo.css'
import Banner from '../../components/Banner/Banner.jsx'
// import Carousel from '../../components/Carousel/Carousel.jsx'
// import data from '../../data/twelveProducts.js'

function CarouselDemo() {
  return (
    <>
      <div className="containerDiv">
        <Banner height='290px' ></Banner>
        {/* <Carousel data={data.products}/> */}
      </div>
    </>
  )
}



export default CarouselDemo