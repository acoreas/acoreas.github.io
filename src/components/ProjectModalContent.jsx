import { Container, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel';

const style = {
  transform: 'translate(0%, 10%)',
  width: "80vw",
  maxHeight: "90vh",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'scroll',
};

function Item(props)
{
  return (
    <Container 
      component="img" 
      src={props.item}
      sx={{
        objectFit:"contain", 
        width:{xs:"100%",sm:"85%"}, 
        height:"62vh",
        objectPosition:"center center", 
        paddingTop:1
      }}
    />
  )   
}

function ProjectModalContent({projectmodal}) {

  const main_image = projectmodal.images.filter(image => image.includes("main"))
  return (
    <Container sx={style}>
      <Item item={projectmodal.images[0]} />
      <Typography id="modal-modal-title" variant="h3" fontWeight="bold" textAlign="center" sx={{marginTop:2,height:"10%"}}>
        {projectmodal.name}
      </Typography>
      <Typography id="modal-modal-description" sx={{marginTop:2, height:"50%"}}>
        {projectmodal.description}
      </Typography>
    </Container>
  )
}

export default ProjectModalContent