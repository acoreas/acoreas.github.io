import React, {useState, useEffect} from 'react'
import { Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

function ScrollUpButton() {

  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setShow(true)
      }
      else {
        setShow(false)
      }
    })
  },[])

  const handleClick = () => {
    window['scrollTo']({top: 0, behaviour: "smooth"})
  }
  
  return (
    <>
        <Fade in={show} timeout={400}>
          <Fab
            onClick={handleClick} 
            size="small"
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16
            }}>
              <KeyboardArrowUpIcon />
          </Fab>
        </Fade>
    </>
  )
}

export default ScrollUpButton