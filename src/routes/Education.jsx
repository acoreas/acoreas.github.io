import React, { useEffect, useState } from 'react'
import grad from '../images/Grad-1.jpg'
import grad2 from '../images/Grad-2.jpg'
import { Box, Fade, Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

var images = [grad,grad2,grad,grad2]

function Education() {
  const [mainImage, setMainImage] = useState(0)

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });

    var educationElement = document.querySelector('.education').getBoundingClientRect();
    var extracurricularElement = document.querySelector('.extracurricular').getBoundingClientRect();
    var spElement = document.querySelector('.schoolprojects').getBoundingClientRect();

    window.addEventListener('scroll', () => {
    if(educationElement.bottom - 100 > window.scrollY) {
      setMainImage(0);
    }
    else if (extracurricularElement.bottom - 100 > window.scrollY) {
      setMainImage(1);
    }
    else if (spElement.bottom - 100 > window.scrollY) {
      setMainImage(2);
    }
    else {
      setMainImage(3);
    }
    })
  },[])

  return (
    <Grid container>
      <Grid item xs={12} lg={4} paddingX={2} sx={{textAlign:"center"}}>

        {/* Education */}
        <Box className="education">
          <Typography variant='h2' fontWeight="bold" marginTop={3} marginBottom={1} sx={{fontVariant:"small-caps"}}>Education</Typography>
          <Typography variant='h5'>University of Calgary</Typography>
          <Typography variant='h5'>BSc. Electrical Engineering<br/>(Biomedical Specialization)</Typography>

          {/* Awards */}
          <Typography variant='h2' fontWeight="bold" marginTop={3} marginBottom={1} sx={{fontVariant:"small-caps"}}>Awards</Typography>
          <Typography variant='h6'>
            Alberta Innovates Award<br/>
            PURE Award<br/>
            Thomas E. Feasby Studentship<br/>
            Sadie M. Nelson Bursary<br/>
            Electric Club Scholarship<br/>
            Jason Lang Scholarship<br/>
            U of C Entrance Scholarship<br/>
            Alexander Rutherford Scholarship
          </Typography>
        </Box>

        {/* Extracurricular */}
        <Box className="extracurricular">
          <Typography variant='h2' fontWeight="bold" marginTop={3} marginBottom={1} sx={{fontVariant:"small-caps"}}>Extracurricular</Typography>
          <Typography variant='h4'>I4H Competition</Typography>
          <Typography variant='h6'>Comp. Desc.</Typography>
          <Typography variant='h4'>BCI Game Jam</Typography>
          <Typography variant='h6'>Comp. Desc.</Typography>
        </Box>

        {/* School Projects */}
        <Box className="schoolprojects">
          <Typography variant='h2' fontWeight="bold" marginTop={3} marginBottom={1} sx={{fontVariant:"small-caps"}}>School Projects</Typography>
          <Typography variant='h4'>Biometrics</Typography>
          <Typography variant='h6'>Biometrics desc.</Typography>
          <Typography variant='h4'>Machine Learning</Typography>
          <Typography variant='h6'>ML desc.</Typography>
        </Box>

        {/* Publications */}
        <Box className="publications">
          <Typography className="publications" variant='h2' fontWeight="bold" marginTop={3} marginBottom={1} sx={{fontVariant:"small-caps"}}>Publications</Typography>
          <Typography variant='h4'>Abstracts</Typography>
          <Typography variant='h6' marginTop={2}>
            Loree-Spacek J, Coreas A, Pichardo S, “Design of an Acoustic Reflective Casing For Neurostimulation Studies
            with Microscopy”, 19th International Society of Therapeutic Ultrasound<br/>
          </Typography>
          <Typography variant='h6' margin={2}>
            J. Holodinsky et al., "Abstract 195: Drip and Ship vs. Mothership: a Comparison of Two Different Conditional
            Probability Models", Stroke, vol. 49, no. 1, 2018. 
          </Typography>
        </Box>
      </Grid>
      <Carousel duration={750} navButtonsAlwaysVisible={false} autoPlay={false} index={mainImage} sx={{zIndex:-1}}>
        {
          images.map( (item, i) =>
            <> 
              <Grid item xs={0} lg={8}
                component="img" 
                src={item} 
                alt="" width="60%" 
                sx={{borderLeft:"solid 8px",borderColor:"secondary.main" ,position:"fixed", right:0, objectFit:"cover", height:"100%", width:"100%", objectPosition:"left bottom"}} >
              </Grid>
            </>
          )
        }
      </Carousel>
    </Grid>
  );
}

export default Education