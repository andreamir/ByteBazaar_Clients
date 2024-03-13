import GameCard from '../GameCard/GameCard.jsx'
import StyledScrollbar from '../../components/StyledScrollbar/StyledScrollbar.js'
import StyledTrackButton from '../../components/StyledTrackButton/StyledTrackButton.js'
import { useRef, useState, useEffect } from 'react'
import { styled } from 'styled-components'

const StyledCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  position: relative;
  border-radius: 24px;
  *::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 0px;
    background-color: #F9F9F9;
    cursor: pointer;
  }
  
  *::-webkit-scrollbar-track:hover {
    background-color: #FFFFFF;
  }
  
  *::-webkit-scrollbar-track:active {
    background-color: #FFFFFF;
  }
  
  *::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: #E20A03;
  }
  
  *::-webkit-scrollbar-thumb:hover {
    background-color: #B50802;
  }
  
  *::-webkit-scrollbar-thumb:active {
    background-color: #B50802;
  }
`

function Carousel(props) {
  const { data } = props;
  const [scrollWidth, setScrollWidth] = useState(0)
  const [maxScrollWidth, setMaxScrollWidth] = useState(0)
  const scrollbarRef = useRef()  
  const gap = 20;

  function handleScroll() {
    setScrollWidth(Math.ceil(scrollbarRef.current.scrollLeft))
  }

  useEffect(() => {
    scrollbarRef.current.addEventListener('scroll', handleScroll)
    const maxScroll = Math.floor(scrollbarRef.current.scrollWidth-scrollbarRef.current.clientWidth)
    setMaxScrollWidth(maxScroll)
  }, [data])


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
      <StyledTrackButton onClick={backClickHandler} $hide={scrollWidth === 0} $left={true}>◀︎</StyledTrackButton>
      <StyledScrollbar  ref={scrollbarRef} $gap={`${gap}px`}>
        {data.map((product, index) => <GameCard key={product._id} data={data[index]}></GameCard>)}
      </StyledScrollbar>
      <StyledTrackButton onClick={forwardClickHandler} $hide={scrollWidth >= maxScrollWidth} >▶</StyledTrackButton>
    </StyledCarousel>
  )
}

export default Carousel