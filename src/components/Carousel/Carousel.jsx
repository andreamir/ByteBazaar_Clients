import CarouselCard from '../CarouselCard/CarouselCard.jsx'
import StyledScrollbar from '../../components/StyledScrollbar/StyledScrollbar.js'
import StyledTrackButton from '../../components/StyledTrackButton/StyledTrackButton.js'
import { useRef, useState, useEffect } from 'react'
import { styled } from 'styled-components'

const StyledCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180vh;
  position: relative;
`

function Carousel(props) {
  const { data } = props;
  const [scrollWidth, setScrollWidth] = useState(0)
  const [maxScrollWidth, setMaxScrollWidth] = useState(0)
  const scrollbarRef = useRef()  

  function handleScroll() {
    setScrollWidth(Math.ceil(scrollbarRef.current.scrollLeft))
  }

  useEffect(() => {
    scrollbarRef.current.addEventListener('scroll', handleScroll)
    const maxScroll = Math.floor(scrollbarRef.current.scrollWidth-scrollbarRef.current.clientWidth)
    setMaxScrollWidth(maxScroll)
  }, [])

  const gap = 20;

  function backClickHandler() {
    const productWidth = scrollbarRef.current.firstChild.clientWidth
    scrollbarRef.current.scrollLeft -= productWidth+gap
  }

  function forwardClickHandler() {
    const productWidth = scrollbarRef.current.firstChild.clientWidth
    scrollbarRef.current.scrollLeft += productWidth+gap
  }

  return(
    <StyledCarousel>
      <StyledTrackButton onClick={backClickHandler} $hide={scrollWidth === 0} $left={true}>◀️{scrollWidth}</StyledTrackButton>
      <StyledScrollbar  ref={scrollbarRef} $gap={`${gap}px`}>
        {data.map((product, index) => <CarouselCard key={product._id} data={data[index]}></CarouselCard>)}
      </StyledScrollbar>
      <StyledTrackButton onClick={forwardClickHandler} $hide={scrollWidth >= maxScrollWidth} >▶{maxScrollWidth}</StyledTrackButton>
    </StyledCarousel>
  )
}

export default Carousel