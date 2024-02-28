import './CarouselDemo.css'
import Carousel from '../../components/Carousel/Carousel.jsx'
import data from '../../data/twelveProducts.js'

function CarouselDemo() {
  return (
    <>
      <div className="containerDiv">
        <Carousel data={data.products}/>
      </div>
    </>
  )
}

export default CarouselDemo