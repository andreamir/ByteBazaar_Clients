import { useParams } from 'react-router-dom'
import ProductDetails from '../../components/ProductDetails/ProductDetails.jsx'
import ShowToast from '../../components/Toast/Toast.jsx'
import useApi from '../../hooks/useApi.js'
import { useEffect, useState } from 'react'

function TestPageJanis() {
  const { id } = useParams() // product id  

  const productHook = useApi();
  // const { data: productData, error: productError, isLoading: productLoading, getData: getProductData } = useApi();

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()
  const [price, setPrice] = useState()
  const [stock, setStock] = useState()
  const [platform, setPlatform] = useState()
  const [genres, setGenres] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [errorType, setErrorType] = useState()
  const [errorTitle, setErrorTitle] = useState()
  const [errorToast, setErrorToast] = useState(false)

  async function fetchProduct() {
    await productHook.getData({ route: `/products/${id}` });
    // await getProductData({ route: `/products/${id}` });
  }

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchProduct();
    };
    fetchDataAsync();
  }, [])

  function provideError(error){
    console.log(error);
    setErrorMessage(error.msg)
    setErrorType('Danger')
    setErrorTitle('Error')
  }
  
  useEffect(() => {

    if(productHook.error){
      provideError(productHook.error)
      setErrorToast(true);
    }

    if (productHook === undefined || productHook.data === undefined) {
      return
    }
    
    const product = productHook.data.product
    setPrice(product.price)
    setStock(product.stock)
    setPlatform(product.platform_id.name)
    setDescription(product.gameTitle_id.description)
    setTitle(product.gameTitle_id.title)
    setImage(product.gameTitle_id.image)

    const genresString = product.genres_ids.map((genre) => Object.values(genre)).join(', ')
    setGenres(genresString)

  }, [productHook])

  return (
    <>
      <div className='productDetails>'>
      {!errorToast && (
        <ProductDetails
          title={title}
          image={image}
          description={description}
          stock={stock}
          price={price}
          platform={platform}
          genres={genres}
        />
      )}
        <div className='toastContainer'>
          {errorToast && (
            <ShowToast 
              message={errorMessage}
              title={errorTitle}
              type={errorType}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default TestPageJanis