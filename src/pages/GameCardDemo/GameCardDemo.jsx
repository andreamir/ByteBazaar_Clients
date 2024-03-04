import '../CarouselDemo/demo.css'
import data from '../../data/twelveProducts.js'
import GameCard from '../../components/GameCard/GameCard.jsx'

function GameCardDemo() {
  const { products } = data
  return (
    <>
      <div className="containerDiv">
        { products.map((product, index) => <GameCard key={product._id} data={product} /> )}
      </div>
    </>
  )
}

export default GameCardDemo