import { useParams } from 'react-router-dom'
import ProductDetails from '../../components/ProductDetails/ProductDetails.jsx'
import data from '../../data/twelveProducts.js'
import useApi from '../../hooks/useApi.js'


function TestPageJanis() {
  const { id } = useParams()

  const smth = useApi()

  const product = data.products.find(product => product._id === id);

  return (
    <>
      <div className='productDetails>'>
        <ProductDetails product={product}/> 
      </div>
    </>
  )
}

export default TestPageJanis