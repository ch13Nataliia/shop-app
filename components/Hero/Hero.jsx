import React from 'react';
import { Box, Paper, Typography, Container, Grid } from '@/components/mui/index';

import Image from 'next/image';


function Hero() {
  return (
    <Container
      fixed
      sx={{ bgcolor: '#cfd8dc', width: '100%', height: '40vh' }}
    ><Grid>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora autem expedita eum quibusdam ex. Enim quisquam deserunt iure reiciendis maxime reprehenderit nostrum nisi. Mollitia quidem at, omnis necessitatibus maxime ipsam.</Grid></Container>
  );
}

export default Hero;
