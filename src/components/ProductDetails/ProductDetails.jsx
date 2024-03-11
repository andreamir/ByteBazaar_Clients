import pcUrl from '../../assets/platforms/PC.png'
import switchUrl from '../../assets/platforms/NintendoSwitch.png'
import play1Url from '../../assets/platforms/PlayStation1.png'
import play4Url from '../../assets/platforms/PlayStation4.png'
import play5Url from '../../assets/platforms/PlayStation5.png'
import wiiUrl from '../../assets/platforms/wii.png'
import xboxUrl from '../../assets/platforms/xbox.png'
import { useShoppingListContext } from '../../contexts/ShoppingListContext'

function ProductDetail(props) {
  const { title, image, description, price, stock, platform, genres, product } = props

  //ADD TO CART BUTTON
  const { addGame } = useShoppingListContext();
  function addToCart(){
    console.log('props from addToCart: ', props);
    addGame(product);
  }

  let overlayUrl = ''

  switch (platform) {
    case 'PC':
      overlayUrl = pcUrl
      break;
    case 'XBoxSeries':
    case 'XBoxOne':
      overlayUrl = xboxUrl
      break;
    case 'PlayStation4':
      overlayUrl = play4Url
      break;
    case 'PlayStation5':
      overlayUrl = play5Url
      break;
    case 'PlayStation1':
      overlayUrl = play1Url
      break;
    case 'Wii':
      overlayUrl = wiiUrl
      break;
    case 'NintendoSwitch':
      overlayUrl = switchUrl
      break;
    default:
    // console.error('platform name is missing');
  }

  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-4 p-0 overflow-hidden shadow-lg order-lg-1">
            <div className="lc-block" style={{ position: 'relative' }}>
              <img className="rounded-start w-100" src={image} alt={title} width="720" />
              <img src={overlayUrl}
                alt={`${title} ${platform}`}
                style={{
                  position: 'absolute',
                  bottom: '3%',
                  right: '4%',
                  maxWidth: '20%',
                  maxHeight: '20%',
                }}
              />
            </div>
          </div>

          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 order-lg-2">
            <div className="lc-block mb-3">
              <div className='block float-right'>{platform}</div>
              <div editable="rich">
                <h2 className="fw-bold display-4">{title}</h2>
                <div className='w-100 d-inline-block'>
                  <h3 className="fw-bold display-5 float-end ">{price}€</h3></div>
              </div>
            </div>

            <div className="lc-block mb-3">
              <div editable="rich">
                <p className="lead">{description}</p>
                <p>Genre: <i>{genres}</i></p>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-between">
              <p>Stock: {stock}</p>
              <a className="btn btn-primary w-lg-100 px-4 me-md-2" onClick={addToCart} role="button">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail