import './App.css'
import Carousel from './components/Carousel/Carousel.jsx'
import data from './data/twelveProducts.js'
console.log(data)

function App() {
  

  return (
    <>
      <h1>Byte Bazaar 👾</h1>
      <Carousel data={data.products}/>
    </>
  )
}

export default App
