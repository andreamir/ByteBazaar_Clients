import StyledCarouselCard from '../StyledCarouselCard/StyledCarouselCard.js'
import StyledCardOverlay from '../StyledCardOverlay/StyledCardOverlay.js'
import './productCard.css'
import { useNavigate } from 'react-router-dom'

function ProductCard(props){
  const navigate = useNavigate()
  const { title, image } = props.data.gameTitle_id;
  const platformName = props.data.platform_id.name;
  const { _id, price } = props.data
  const refactoredTitle = []
  if (title.length > 20) {
    const splitTitle = title.split(' ')
    let titleParts = ''
    splitTitle.forEach((word) => {
      if (titleParts.length < 4) {
          titleParts += `${word} `
      }
      else {
        titleParts += `${word} `
        refactoredTitle.push(titleParts)
        titleParts = ''
      }
    })
    refactoredTitle.push(titleParts)
  } 
  const platformImages = {
    XBoxSeries: '',
    PC: '',
    NintendoSwitch: '',
    XBoxOne: '',
    PlayStation4: '',
    PlayStation5: 'https://cdn.vox-cdn.com/thumbor/X4OaqgXaWLFyyy_lO_wiSvrmnKo=/0x110:1920x1001/1820x1213/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66040679/Screenshot__90_.0.png',
  }

  return (
    <>
      <div>
        <StyledCarouselCard $bgimage={image}>
              <img className='platformImage' src={platformImages[platformName]} alt="" />
          <StyledCardOverlay onClick={ () => { navigate(`/product/${_id}`) }}>
            <div>
              {refactoredTitle.length ?
              refactoredTitle.map(phrase => 
                phrase &&
                <p key={phrase} className='title'>{phrase}</p>)
               :
              (<p className='title'>{title}</p>)
              }
              <p className='platform'>{platformName}</p>
            </div>
            <p className='price'>{`${price}€`}</p>
          </StyledCardOverlay>
        </StyledCarouselCard>
      </div>
    </>
  )
}

export default ProductCard