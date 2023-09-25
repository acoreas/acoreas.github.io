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
As you may have guessed from the giant lettering up top, my name is Alan. A proud Calgarian and Electrical Engineering graduate with a biomedical \
specialization, I'm currently a research assistant in the Foothills NeuroFUS lab where I handle both software and hardware projects for use \
in focused ultrasound applications. While my interests primarily lie in the medical field, I've also gained experience in \
instrumentation & controls, data analysis, product design, and even event planning. \
There's plenty more to learn about me so hope you'll explore this site and get to know me! \
"
// including 

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
        display="flex"
        sx={{
        backgroundImage: `url(${bg_photo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        width: "100%",
        height: "90vh",
        borderBottom: '8px solid',
        borderColor: "secondary.main",
        backgroundAttachment: "fixed",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        paddingBottom: "15%",
        }}
      >
        <Box
          sx ={{
            backdropFilter: "blur(8px)",
            padding: 4,
            flexWrap: 'wrap',
          }}
        >
          <Typography 
            textAlign="center"
            variant='h1' 
            noWrap
            color="primary.main"
            sx={{
              fontFamily: 'Roboto Regular',
              letterSpacing: '.5rem',
              fontSize: {xs:"10vw",sm:"5vw"},
            }}
          >
            ALAN COREAS
          </Typography>
          <Typography
            textAlign="center"
            variant='h4' 
            color="primary.main"
            sx={{
              fontFamily: 'Roboto Light',
              letterSpacing: '.25rem',
              paddingTop: "1%",
              fontSize: {xs:"4vw",sm:"2vw"},
            }}
          >
            ELECTRICAL EIT | ADEPT LEARNER | PROBLEM SOLVING ENTHUSIAST
          </Typography>
        </Box>
      </Box>
      <Stack alignItems="center">
        <Box component="img" src={profile} border="solid 1.25vh" borderRadius="50%" height="40vh" alignSelf="center" mt="1.5rem"/>
        <Typography variant="h2" fontWeight="medium" align='center' m="1rem">
          Welcome!
        </Typography>
        <Typography textAlign="center" marginBottom={2} width={{xs: "95%",sm:"40%"}}>
          {bio}
        </Typography>
      </Stack>
    </>
  );
}

export default Home