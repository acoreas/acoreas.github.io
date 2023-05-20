import { Container, Typography } from '@mui/material'
import React from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80vw",
  maxHeight: "100vh",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ProjectModalContent({projectmodal}) {
  return (
    <Container sx={style}>

      <Typography id="modal-modal-title" variant="h5" fontWeight="bold" textAlign="center" sx={{height:"10%"}}>
        {projectmodal.name}
      </Typography>
      <Container component="img" src={projectmodal.images[0]} sx={{objectFit:"cover", width:{xs:"100%",sm:"85%"}, height:"40%", objectPosition:"center bottom", paddingTop:1}}/>
      <Typography id="modal-modal-description" sx={{marginTop:2, height:"50%"}}>
        {projectmodal.description}
      </Typography>

    </Container>
  )
}

export default ProjectModalContent