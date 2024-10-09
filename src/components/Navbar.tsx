import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { Link as ScrollLink } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#497f8c' }}>
        <Toolbar>
          {/* Icono de Inicio */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            {/* Este icono lleva a la sección de Inicio */}
            <ScrollLink to="inicio" smooth={true} duration={500}>
              <HomeIcon sx={{ color: 'white', fontSize: 30 }} />
            </ScrollLink>
          </IconButton>

          {/* Título de la psicóloga */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Psicóloga XYZ
          </Typography>

          {/* Menú de navegación */}
          <MenuItem>
            <ScrollLink to="contacto" smooth={true} duration={500}>
              <Typography textAlign="center" sx={{ color: 'white' }}>Contacto</Typography>
            </ScrollLink>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
