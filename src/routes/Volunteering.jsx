import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import I4HImage1 from "../images/volunteering/i4h/i4h_logo_full_colour.png"
import I4HImage2 from "../images/volunteering/i4h/collab-1.jpg"

function Volunteering() {

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  },[])

  return (
    <Container>
      {/* Innovation 4 Health */}
      <Grid container spacing={2} alignItems="center" sx={{padding:4}}>
        <Grid item xs={12}>
          <Typography variant='h3' fontWeight="bold" sx={{textAlign:{xs:"center", sm:"left"}}}>Director of Education</Typography>
          <Typography variant='h4'  sx={{textAlign:{xs:"center", sm:"left"}}}>Innovation 4 Health 2022</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6'>What's Innovation 4 Health?</Typography> 
          <Typography sx={{textAlign:{xs:"center", sm:"left"}}}>
            Innovation 4 Health (I4H) is a competition that brings together students from different faculties (e.g. engineering, sciences, business, etc.)
            to tackle healthcare issues brought forward by professionals in the industry. Supporting teams by partnering them up with industry mentors, running
            educational workshops, fabrication resources etc, they have two months to research and develop potential solutions before participating in a
            72 hour hackathon building a functional prototype. Their solutions were then presented on demo day to a team of judges with winners receiving money to continue developing their 
            product.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box component="img" src={I4HImage1} width="100%" maxHeight="200px" sx={{objectFit:"contain", objectPosition:"center 30%"}}/>
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center" sx={{paddingX:4}}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" sx={{justifyContent:"center"}}>
            <Paper component="img" src={I4HImage2} elevation={12} sx={{width:"100%", maxHeight:"400px", objectFit:"cover", objectPosition:"center 20%"}}/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6'>What Does the Director of Education Do?</Typography>
          <Typography sx={{textAlign:{xs:"center", sm:"left"}}}>
            Glad you asked! As the Director of Education, I was responsible for recruiting qualified speakers/instructors to run workshops on useful topics leading up to
            the weekend hackathon. Topics included:
            <ul>
              <br/>
              <li>Intellectual Property</li>
              <li>Branding & Design</li>
              <li>3D Modeling/Printing</li>
              <li>Intro to Coding</li>
              <li>Machine Learning</li>
              <li>and many more</li>
            </ul>
            In addition to organizing and handling workshop logistics, I also recuited mentors, acted as the point of contact for teams, prepared event documentation, 
            and worked alongside judges on demo day.
          </Typography>
          <br/>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{padding:4}}>
        <Grid item xs={12}>
          <Typography variant='h6'>This Sounds Great! Can I Help?</Typography> 
          <Typography sx={{textAlign:{xs:"center", sm:"left"}}}>
            We're always looking for support in bringing this competition to fruition and there are numerous ways to get involved, which include:
            <ul>
              <br/>
              <li>Proposing a challenge</li> 
              <li>Helping organize</li>
              <li>Mentoring or Instructing</li>
              <li>Donating</li>
              <li>etc.</li>
            </ul>
            More information about this competition is 
            available <Typography component={Link} to="https://www.innovation4health.com" sx={{textDecoration: 'none'}}>here</Typography>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Volunteering