import React, { useEffect, useState } from 'react'
import grad from '../images/education/grad-1.jpg'
import grad2 from '../images/education/grad-2.jpg'
import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
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

    window.addEventListener('scroll', () => {
    if(window.innerHeight/3 > window.scrollY) {
      setMainImage(0);
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
          <Typography variant='h3' fontWeight="bold" marginTop={3} marginBottom={1}>Education</Typography>
          <Typography variant='h5'>University of Calgary</Typography>
          <Typography variant='h5'>BSc. Electrical Engineering</Typography>
          <Typography variant='h6'>(Biomedical Specialization)</Typography>

          {/* Awards */}
          <Typography variant='h3' fontWeight="bold" marginTop={3} marginBottom={1}>Awards</Typography>
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

        {/* Publications */}
        <Box className="publications">
          <Typography className="publications" variant='h3' fontWeight="bold" marginTop={3} marginBottom={1}>Abstracts</Typography>
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
      <Grid 
          item xs={0} lg={8} 
          sx={{borderLeft:"solid 8px",borderColor:"secondary.main"}}
      >
        {images? 
        (
          <Carousel 
            duration={750} 
            navButtonsAlwaysVisible={false} 
            indicators={false} 
            autoPlay={false} 
            index={mainImage} 
            sx={{zIndex:-1}}>
            {
              images.map( (item, i) =>
                <> 
                  <Container disableGutters
                    component="img" 
                    src={item} 
                    alt=""
                    sx={{objectFit:"cover", position:"fixed"}} >
                  </Container>
                </>
              )
            }
          </Carousel>
        ) :
        (
          <Skeleton variant='rectangular' height="25%" width="50%" sx={{position:"fixed", top:"40%", right:"7.5%"}}/>
        )
        }
      </Grid>
    </Grid>
  );
}

export default Education