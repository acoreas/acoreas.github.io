import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/system/Stack';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

export default function StickyFooter() {
  return (
    <>
        <Box
          display="flex"
          width="100%"
          spacing={1.5}
          justifyContent="center"
          sx={{
            height:"10vh",
            mt: "auto",
            backgroundColor: 'primary.main',
          }}
        >
          <IconButton component={Link} to="https://github.com/acoreas">
            <GitHubIcon sx={{color:"light.main", fontSize: "38px", "&:hover": {color: "#6e5494"}}}/>
          </IconButton>
          <IconButton component={Link} to="https://www.linkedin.com/in/alancoreas">
            <LinkedInIcon sx={{color:"light.main", fontSize: "42px", "&:hover": {color: "#0077B5"}}}/>
          </IconButton>
        </Box>
    </>
  );
}