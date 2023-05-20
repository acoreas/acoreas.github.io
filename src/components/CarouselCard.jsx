import { Box, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function CarouselCard(props) {
  return (
    <>
      <Container disableGutters sx={{ alignItems:"stretch"}}>  
          {/* Title */}
          <Typography variant='h4' fontWeight="bold" paddingTop={1} textAlign="center" sx={{fontVariant: "small-caps"}}>{props.item.title}</Typography>

          {/* Content */}
          <Box sx={{display:"flex", flexDirection: {xs: "column",sm: "row"}, paddingX: {sm: 10}}}>
            <Paper elevation={12} component="img" src={props.item.image} sx={{height:{xs:"70vh"}, width:{xs:"100%", sm:"80%"}, objectFit:"cover"}}/>
            <Typography paddingLeft={2} variant='paragraph' sx={{marginTop:{xs:2,sm:0}, maxWidth:{xs:"100%",sm:"50%"} }}>{props.item.text}</Typography>
          </Box>
      </Container>
    </>
  )
}

export default CarouselCard