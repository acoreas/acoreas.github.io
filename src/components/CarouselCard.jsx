import {Box, Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function CarouselCard(props) {
  return (
    <>
      <Box minHeight="80vh">
        <Grid container gap={0} sx={{minHeight:"80vh",border:"solid red 2px"}}>
          
          {/* Title */}
          <Grid item xs={12} sx={{border:"solid red 2px"}}>
            <Typography variant='h2' fontWeight="bold" textAlign="center" sx={{fontVariant: "small-caps"}}>{props.item.title}</Typography>
          </Grid>

          {/* Content */}
          <Grid container direction={{sm:"row",xs:"col"}} sx={{border:"solid red 2px"}}>
            <Grid item xs={12} sm={6} padding={1} paddingX={2}>
              <Paper elevation={12} sx={{backgroundImage:`url(${props.item.image})`,width:"100%", height:"100%",backgroundSize:"cover", backgroundPosition:"center center"}} />
            </Grid>
            <Grid item xs={12} sm={6} padding={1}>
              <Typography variant='paragraph' >{props.item.text}</Typography>
            </Grid>
          </Grid>

        </Grid>
      </Box>
    </>
  )
}

export default CarouselCard