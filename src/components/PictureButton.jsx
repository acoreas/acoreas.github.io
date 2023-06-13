import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';
import ProjectModalContent from './ProjectModalContent';
import Carousel from 'react-material-ui-carousel';
import Projects, { projs } from '../routes/Projects';
import { Container } from '@mui/system';


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 70%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'black',
  opacity: 0.35,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

function PictureButton({project, index}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ImageButton 
        focusRipple
        key={project.name}
        onClick={handleOpen}
        style={{
        width: "60%",
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${project.images[0]})`}} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {project.name}
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <ProjectModalContent projectmodal={project} />
        {/* Implementation for carousel modals, but have issue with button not opening right project */}
        {/* <Carousel
          animation='slide' 
          duration={750} 
          navButtonsAlwaysVisible={true} 
          indicators={true}
          autoPlay={false}
          navButtonsWrapperProps={{
            style: {
              position:"fixed",
              top: '10px',
            }
          }}
        >
          {Object.entries(projs).map( ([key,value]) => <ProjectModalContent projectmodal={value}/>)}
        </Carousel> */}
      </Modal>
    </>
  )
}

export default PictureButton