import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  return (
    <>
        <AppBar position='sticky' sx={{minHeight:"10vh"}}>
            <Toolbar sx={{height:"10vh"}} >
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
                  fontSize: '2rem',
                  color: "inherit",
                  "&:hover": {
                    color: "inherit"
                  },
                  textDecoration: 'none',
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
                  fontSize: '1.5rem',
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
              <Box justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }}}>
                {pages.map((page,i) => (
                  <Button component={Link}
                    to={"/"+String(page)}
                    activeStyle={{color: "red"}}
                    key={i}
                    id={i}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2,mx:0.5, color: location.pathname.includes(String(page)) ? 'secondary.main' : 'white', display: 'block',"&:hover": {color: "secondary.main"}, fontSize:"1rem"}}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
        </AppBar>

        <ScrollUpButton />
    </>
  );
}
export default ResponsiveAppBar;