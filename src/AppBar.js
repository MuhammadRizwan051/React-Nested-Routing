
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";
import "./App.css"


// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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

              <MenuItem onClick={handleCloseNavMenu} style={{padding:'0px'}} >
                <Box style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black', width: '50vw', padding: '40px 30px', marginTop:'-8px',marginBottom:'-8px'}}>
                  <NavLink to='/' end className="dashboard_links mobile_links" style={{color:'white', textDecoration: 'none' }}>Home</NavLink>
                  <NavLink to='/jeans' className="dashboard_links mobile_links" style={{color:'white', textDecoration: 'none' }}>Jeans</NavLink>
                  <NavLink to='/t-shirt' className="dashboard_links mobile_links" style={{color:'white', textDecoration: 'none' }}>T-shirt</NavLink>
                  <NavLink to='/zipper' className="dashboard_links mobile_links" style={{color:'white', textDecoration: 'none' }}>Zipper</NavLink>
                  <NavLink to='/dashboard' className="dashboard_links mobile_links" style={{color:'white', textDecoration: 'none' }}>Dashboard</NavLink>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, textAlign: 'center', padding: '10px 0px', fontSize: '25px', fontFamily: 'cursive' }}>
            <NavLink to='/' end className="dashboard_links" style={{ color: 'white', textDecoration: 'none', flexGrow: 1 }}>Home</NavLink>
            <NavLink to='/jeans' className="dashboard_links" style={{ color: 'white', textDecoration: 'none', flexGrow: 1 }}>Jeans</NavLink>
            <NavLink to='/t-shirt' className="dashboard_links" style={{ color: 'white', textDecoration: 'none', flexGrow: 1 }}>T-shirt</NavLink>
            <NavLink to='/zipper' className="dashboard_links" style={{ color: 'white', textDecoration: 'none', flexGrow: 1 }}>Zipper</NavLink>
            <NavLink to='/dashboard' className="dashboard_links" style={{ color: 'white', textDecoration: 'none', flexGrow: 1 }}>Dashboard</NavLink>
          </Box>

          <Box>
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
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

