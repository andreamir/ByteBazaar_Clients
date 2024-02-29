import { useParams } from 'react-router-dom'
import ProductDetails from '../../components/ProductDetails/ProductDetails.jsx'
import data from '../../data/twelveProducts.js'


function TestPageJanis() {
  const { id } = useParams()
  const product = data.products.find(product => product._id === id);

  return (
    <>
      <p>Product: {id}</p>
      <div className='productDetails>'>
        <ProductDetails product={product}/> 
      </div>
    </>
  )
}

export default TestPageJanis