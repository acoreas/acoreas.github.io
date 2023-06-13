import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect } from 'react'
import bg_photo from '../images/home/calgary-saddledome.jpg'
import profile from '../images/home/profile-1.PNG';

// Custom Component Styling Example
//
// Add to imports
// import { styled } from '@mui/material/styles';
//
// Add under function
// const myCustomComponent = styled (Button)(({ theme}) => ({
//   padding: theme.spacing(2)
// }));

const bio = "\
As you may have guessed from the lettering up top, my name is Alan. A proud Calgarian and Electrical Engineering graduate with a biomedical \
specialization, I'm currently a research assistant in the Foothills NeuroFUS lab where I handle both software and hardware projects for use \
in focused ultrasound applications including image processing, acoustic simulations, and transducer fabrication. While my \
interests primarily lie in the medical field, I've also gained experience in product design, instrumentation & controls, and event planning. \
There's still plenty more to learn about me so hope you'll stick around and discover the real me! \
"

function Home() {

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  },[])

  return (
    <>
    <Box
      sx={{
      backgroundImage: `url(${bg_photo})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      width: "100%",
      height: "90vh",
      borderBottom: '8px solid',
      borderColor: "secondary.main",
      backgroundAttachment: "fixed"
      }}
    >

    </Box>
    <Stack alignItems="center">
      <Box component="img" src={profile} border="solid 1.25vh" borderRadius="50%" height="40vh" alignSelf="center" mt="1.5rem"/>
      <Typography variant="h2" fontWeight="medium" align='center' m="1rem">
        Welcome!
      </Typography>
      <Typography textAlign="center" marginBottom={2} width={{xs: "95%",sm:"60%"}}>
        {bio}
      </Typography>
    </Stack>
    </>
  );
}

export default Home