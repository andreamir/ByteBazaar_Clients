import { useParams } from 'react-router-dom'
import ProductDetails from '../../components/ProductDetails/ProductDetails.jsx'
// import data from '../../data/twelveProducts.js'
import useApi from '../../hooks/useApi.js'
import { useEffect }  from 'react'

function TestPageJanis() {
  const { id } = useParams()

  const { data, error, isLoading, getData } = useApi()

  useEffect(() => {
  getData({ route: '/gameTitles/productId/'+id })},
 [])

 useEffect(() => { 
  console.log(data);
 }, [data])
 
   const product = data.find(gameTitle => _id === id);

  return (
    <>
      <div className='productDetails>'>
        <ProductDetails product={product}/> 
      </div>
    </>
  )
}

export default TestPageJanis