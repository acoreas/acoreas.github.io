import { Box, Container, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import pic from "../images/calgary-night.jpg"
import I4HImage1 from "../images/collab-1.jpg"
import I4HImage2 from "../images/collab-2.jpg"
import I4HImage3 from "../images/collab-1.jpg"
import BCIImage from "../images/collab-1.jpg"


        // {/* Extracurricular */}
        // <Box className="extracurricular">
        //   <Typography variant='h2' fontWeight="bold" marginTop={3} marginBottom={1} sx={{fontVariant:"small-caps"}}>Extracurricular</Typography>
        //   <Typography variant='h4'>I4H Competition</Typography>
        //   <Typography variant='h6'>Comp. Desc.</Typography>
        //   <Typography variant='h4'>BCI Game Jam</Typography>
        //   <Typography variant='h6'>Comp. Desc.</Typography>
        // </Box>

function Volunteering() {

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  },[])

  return (
    <>
      {/* Innovation 4 Health */}
      <Container maxWidth="xl" sx={{marginTop:4, marginBottom:6, display:{xs:"inline-block",sm:"flex"}}}>
        <Paper component="img" src={I4HImage1} elevation={12} height={400} sx={{objectFit:"cover", objectPosition:"center 30%", width:{xs:"100%", sm:"40%"}}}/>
        <Box sx={{width:{xs:"100%", sm:"60%"}, marginLeft:{xs:0,sm:2}}}>
          <Typography variant='h2' sx={{textAlign:{xs:"center", sm:"left"}}}>Header</Typography>
          <Typography sx={{textAlign:{xs:"center", sm:"left"}}}>
            Body text Body text Body text Body text Body text Body text Body text Body text 
            Body text Body text Body text Body text Body text Body text Body text Body text Body text 
            Body text Body text Body text Body text Body text Body text Body text Body text Body text Body text 
            Body text Body text Body text Body text Body text Body text Body text Body text Body text Body text 
            Body text Body text Body text Body text Body text Body text Body text Body text Body text Body text 
            Body text Body text Body text Body text Body text Body text Body text 
          </Typography>
        </Box>
      </Container>

      {/* BCI Game Jam */}
      <Container maxWidth="xl" sx={{marginTop:4, marginBottom:6, display:{xs:"inline-block",sm:"flex"}}}>
        <Paper component="img" src={pic} elevation={12} height={400} sx={{objectFit:"cover", objectPosition:"center 30%", width:{xs:"100%", sm:"40%"}, justifySelf:"right"}}/>
        <Box sx={{width:{xs:"100%", sm:"60%"}, marginLeft:{xs:0,sm:2}}}>
          <Typography variant='h2'sx={{textAlign:{xs:"center", sm:"left"}}}>Header</Typography>
          <Typography sx={{textAlign:{xs:"center", sm:"left"}}}>
            Body text Body text Body text Body text Body text Body text Body text Body text 
            Body text Body text Body text Body text Body text Body text Body text Body text Body text 
            Body text Body text Body text Body text Body text Body text Body text Body text Body text Body text 
            Body text Body text Body text Body text Body text Body text Body text Body text Body text Body text 
            Body text Body text Body text Body text Body text Body text Body text Body text Body text Body text 
            Body text Body text Body text Body text Body text Body text Body text 
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Volunteering