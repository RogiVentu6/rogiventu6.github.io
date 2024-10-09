// src/components/Navbar.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { Link as ScrollLink } from 'react-scroll';

const Navbar: React.FC<{ setActiveComponent: React.Dispatch<React.SetStateAction<string>> }> = ({ setActiveComponent }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#497f8c' }}>
        <Toolbar>
          {/* Icono de Inicio */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
            onClick={() => setActiveComponent('main')}
          >
            <ScrollLink to="inicio" smooth={true} duration={500}>
              <HomeIcon sx={{ color: 'white', fontSize: 30 }} onClick={() => setActiveComponent('main')}/>
            </ScrollLink>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Psicóloga XYZ
          </Typography>

          {/* Menú de navegación */}
          <MenuItem onClick={() => setActiveComponent('terapias')}>
            <Typography textAlign="center" sx={{ color: 'white' }}>Terapias</Typography>
          </MenuItem>
          <MenuItem onClick={() => setActiveComponent('evaluaciones')}>
            <Typography textAlign="center" sx={{ color: 'white' }}>Evaluaciones</Typography>
          </MenuItem>
          <MenuItem onClick={() => setActiveComponent('otros')}>
            <Typography textAlign="center" sx={{ color: 'white' }}>Otros</Typography>
          </MenuItem>

          {/* Botón de Contacto */}
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
