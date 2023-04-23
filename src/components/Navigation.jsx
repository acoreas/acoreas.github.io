// import { Link } from "react-router-dom"
// import '../App.css';
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Container from "react-bootstrap/Container";
// import {AiFillGithub} from "react-icons/ai/index";
// import {AiFillLinkedin} from "react-icons/ai/index";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const pages = ['Home', 'Projects', 'Volunteering','Hobbies','Education','Contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null); // MODIFY PAGES TO USE SIMILAR DROPDOWN MENU

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <>
      <CssBaseline >
        <AppBar >
          <Container maxWidth="xxl">
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
              <Box justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
              
              {/* SETTINGS */}
              {/* <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box> */}
            </Toolbar>
          </Container>
        </AppBar>

        {/* BACK TO TOP BUTTON */}
        <Toolbar id="back-to-top-anchor"/>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </CssBaseline>
    </>
  );
}
export default ResponsiveAppBar;


// function Navigation () {

//   return (
    
//       <Navbar className="nav-bar" collapseOnSelect expand="lg" fixed="top">
//         <Container fluid>
//           <Navbar.Brand><Link className="nav-bar-brand" to='/'>Alan Coreas</Link></Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse  className="justify-content-end" id="responsive-navbar-nav">
//             <Nav>
//               <Nav.Link ><Link className="nav-bar-item" to="/">Home</Link></Nav.Link>
//               {/* Menu dropdown giving too many issues, come back and fix later

//                 <NavDropdown className="nav-bar-dropdown" title="Projects" id="collasible-nav-dropdown">
//                 <NavDropdown.Header className="nav-bar-dropdown-header">NEUROFUS</NavDropdown.Header>
//                 <NavDropdown.Item className="nav-bar-dropdown-item">Project 1</NavDropdown.Item>
//                 <NavDropdown.Item className="nav-bar-dropdown-item">Project 2</NavDropdown.Item>
//                 <NavDropdown.Item className="nav-bar-dropdown-item">Project 3</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item className="nav-bar-dropdown-item">Project 4</NavDropdown.Item>
//                 </NavDropdown> 

//                 */}
//               <Nav.Link ><Link className="nav-bar-item" to="/projects">Projects</Link></Nav.Link>
//               <Nav.Link ><Link className="nav-bar-item" to="/volunteering">Volunteering & Extracurricular</Link></Nav.Link>
//               <Nav.Link ><Link className="nav-bar-item" to="/Hobbies">Hobbies & Interests</Link></Nav.Link>
//               <Nav.Link><Link className="nav-bar-item" to="/education">Education</Link></Nav.Link>
//               <Nav.Link><Link className="nav-bar-item" to="/contact">Contact</Link></Nav.Link>
//               <a href="https://github.com/acoreas"><AiFillGithub className="nav-bar-github"/></a>
//               <a href="https://www.linkedin.com/in/alancoreas"><AiFillLinkedin className="nav-bar-linkedin"/></a>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//   );
// }
// export default Navigation