import React from 'react';
import {
  Box,
  Grid,
  Card,
  BottomNavigation,
  BottomNavigationAction,
  FavoriteIcon,
  LocationOnIcon,
  Typography,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  YouTubeIcon,
  InstagramIcon,
} from '@/components/mui/index';
import { lightBlue } from '@mui/material/colors';
import Productlist from '../ProductList';

function FooterNavigation() {
  return (
    <Grid   justifyContent="space-between  "
      container
      spacing={2}
      sx={{ marginTop: 5, bgcolor: '#b0bec5', color: '#fff', padding: 5 }}
    >

      <Grid item xs={4} sm={2} md={2}>
        <Grid>CUSTOMER SERVICE</Grid>
        <Grid>Track My Order</Grid>
        <Grid>Returns &amp; Exchanges</Grid>
        <Grid>Shipping Terms</Grid>
        <Grid>Contact Us</Grid>
        <Grid>FAQ</Grid>
      </Grid>

      <Grid item xs={4} sm={2} md={2}>
        <Typography>MY ACCOUNT</Typography>
        <Grid>Create Account</Grid>
        <Grid>Accounts</Grid>
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
        <Typography>COMPANY</Typography>
        <Grid>About Us</Grid>
        <Grid>Careers</Grid>
        <Grid>Investor Relations</Grid>
      </Grid>
      <Grid  xs={4} sm={2} md={2}   container
  direction="row"
  justifyContent="space-between"
  alignItems="center">
        <Grid>
          <FacebookIcon />
        </Grid>
        <Grid>
          <TwitterIcon />
        </Grid>
        <Grid>
          <PinterestIcon />
        </Grid>
        <Grid>
          <YouTubeIcon />
        </Grid>
        <Grid>
          <InstagramIcon />
        </Grid>
      </Grid>

    </Grid>
  );
}

export default FooterNavigation;
