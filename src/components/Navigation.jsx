import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import ScrollUpButton from './ScrollUpButton';

const pages = ['Home', 'Projects', 'Volunteering','Hobbies','Education','Contact'];

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <CssBaseline >
        <AppBar position='sticky' sx={{height:"10vh"}}>
          <Container maxWidth="xxl" >
            <Toolbar disableGutters>

              {/* LARGE DEVICE BRANDNAME*/}
              <Typography
                variant="h5"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.5rem',
                  color: "inherit",
                  "&:hover": {
                    color: "inherit"
                  },
                  textDecoration: 'none',
                  // justifyContent:"center",
                  // alignSelf:"center"
                }}
              >
                ALAN COREAS
              </Typography>
              
              {/* SMALL DEVICE NAVVBAR */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>

                <Menu 
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography 
                        component={Link} 
                        to={"/"+String(page)}
                        textAlign="center" 
                        sx={{color: "primary.main", textDecoration:'none',"&:hover": {color: "secondary"},}}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* SMALL DEVICE BRANDNAME */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.5rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  "&:hover": {
                    color: "inherit"
                  },
                }}
              >
                ALAN COREAS
              </Typography>

              {/* LARGE DEVICE NAVBAR */}
              <Box justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems:"center"}}}>
                {pages.map((page) => (
                  <Button component={Link}
                    to={"/"+String(page)}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block',"&:hover": {color: "secondary.main"}}}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <ScrollUpButton />
      </CssBaseline>
    </>
  );
}
export default ResponsiveAppBar;