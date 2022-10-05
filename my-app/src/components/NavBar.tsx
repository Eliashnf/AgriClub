import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import '../index.css';

const pages = ['DEMARCHE', 'PARTENARIAT'];
const settings = ['Profile'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img width={150} src='data:image/png;base64,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' />    
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
                
                onClick={handleCloseNavMenu}
                sx={{
                    
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: '34px'
                  }}
              >
                ACCUEIL
              </Button>

            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: '24px'
                  }}
              >
                {page}
              </Button>
            ))}
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
