import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel';
import CarouselCard from '../components/CarouselCard';

import videogame from '../images/bouldering.jpg'
import bouldering from '../images/bouldering.jpg'
import hockey from '../images/bouldering.jpg'

var hobbies = [
  {
      title: "Video Game Design",
      image: videogame,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Elementum tempus egestas sed sed risus pretium quam. Sollicitudin ac orci phasellus egestas tellus rutrum. Elementum tempus egestas sed sed risus pretium quam. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. In cursus turpis massa tincidunt dui ut. Sed tempus urna et pharetra pharetra massa. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Habitasse platea dictumst vestibulum rhoncus est. Dignissim diam quis enim lobortis. Eget duis at tellus at.",
  },
  {
      title: "Bouldering",
      image: bouldering,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Elementum tempus egestas sed sed risus pretium quam. Sollicitudin ac orci phasellus egestas tellus rutrum. Elementum tempus egestas sed sed risus pretium quam. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. In cursus turpis massa tincidunt dui ut. Sed tempus urna et pharetra pharetra massa. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Habitasse platea dictumst vestibulum rhoncus est. Dignissim diam quis enim lobortis. Eget duis at tellus at."
  },
  {
    title: "Hockey (Watching)",
    image: hockey,
    text: "Short text Short text Short text Short text Short text Short text Short text Short text Short text Short text Short text "
  },
]

function Hobbies() {

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  },[])

  return (
    
      <Carousel animation='slide' sx={{minHeight:"80vh"}} duration={750} navButtonsAlwaysVisible={true} autoPlay={false}>
        {
          hobbies.map( (item, i) => <CarouselCard key={i} item={item} /> )
        }
      </Carousel>

  );
}

export default Hobbies