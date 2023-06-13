import { Box, Container, Grid, Typography} from '@mui/material';
import React, { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel';

const boulderingImages = require.context('../images/hobbies/bouldering', true);
const gameDesignImages = require.context('../images/hobbies/game-design', true);
const hockeyImages = require.context('../images/hobbies/hockey', true);
const printingImages = require.context('../images/hobbies/3d-printing', true);

const boulderingImageList = boulderingImages.keys().map(image => boulderingImages(image));
const gameDesignImageList = gameDesignImages.keys().map(image => gameDesignImages(image));
const hockeyImageList = hockeyImages.keys().map(image => hockeyImages(image));
const printingImageList = printingImages.keys().map(image => printingImages(image));

var hobbies = [
  {
    title: "Bouldering",
    images: boulderingImageList,
    text: 
    <Box>
      For the uninitiated, bouldering is a form of rock climbing where ropes aren't used, but <b>don't worry!</b> Boulderers don't have a death wish, 
      because there are mats to fall on instead. 
      <br/>
      <br/>
      Typically a lot shorter than traditional rope climbing routes, bouldering focuses on technical 
      'problems' that require some thinking to figure out. After first trying it in 2021, I was immediately hooked. I guess I love problem solving and apparently need to have it in 
      my physical activities and spare time.
      <br/>
      <br/>
      Problems range from V0 (pretty much like climbing a ladder) to V17 (insane level of difficulty that will take, even the best climbers in 
      the world, years to complete). I happily sit in the middle-ish at V6-V7 and have even attempted some intermediate local competitions.
    </Box>
  },
  {
    title: "3D Printing",
    images: printingImageList,
    text:
    <Box>
      Ever since I've learned about 3D printing, I've been looking for excuses to print new and interesting things. Nothing quite as satisfying as creating a 3D model, printing it, and
      having something physical in the span of a few hours. As you can tell from the prints, I also really love dogs. 
    </Box>
  },
  // {
  //     title: "Video Game Design",
  //     images: gameDesignImageList,
  //     text:
  //     <Box>

  //     </Box>
  // },
  {
    title: "Hockey",
    images: hockeyImageList,
    text:
    <Box>
      I can't skate to save my life, but I love watching hockey when I can. A long time Flames fan who has been following the team since the early 2010s and has been experiencing heartbreak for just as long. I still try to 
      catch 3-5 games throughout the season where you'll find me munching on a footlong hotdog. Loyalty is a good quality right?
      <br/>
      <br/>
      Interesting fact, I was included in a red corner segment where I had the chance to win an all expenses paid trip to Las Vegas if the Flames scored within a minute. On a related note, I 
      hope to see a Las Vegas show one day...
    </Box>
  },
]

var leftdisp
var rightdisp
function Item({hobby,index})
{
  if ((index+1)%2 === 1)
  {
    leftdisp=true
    rightdisp=false
  }
  else
  {
    leftdisp=false
    rightdisp=true
  }

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="space-evenly" padding={4}>
      <Grid item xs={12}>
        <Typography variant='h3' fontWeight="bold" >{hobby.title}</Typography>
      </Grid>

      {leftdisp && (
        <Grid item xs={12} sm={6}>
          <Typography variant='paragraph'>{hobby.text}</Typography>
        </Grid>
      )}
      
      <Grid item xs={12} sm={6}>
        <Carousel indicators={false} interval={5000}>
          {
            hobby.images.map( (item, j) => <Container disableGutters key={j} elevation={12} component="img" src={item} sx={{height:"50vh", objectFit:"cover", border:{sm:"solid 6px #282C34"}}}/> )
          }
        </Carousel>
      </Grid>

      {rightdisp && (
        <Grid item xs={12} sm={6}>
          <Typography variant='paragraph'>{hobby.text}</Typography>
        </Grid>
      )}
      
    </Grid>
  )   
}

function Hobbies() {

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  },[])

  return (
    <Container>
      {
        hobbies.map( (item, i) => <Item key={i} hobby={item} index={i} /> )
      }
    </Container>
  );
}

export default Hobbies