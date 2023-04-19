import React from "react";
import { Grid, Typography, Toolbar, AppBar } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';

import '../style/navbar.css';



function Navbar(){
    return(
      <AppBar position="static" className='navBar-area'>
      <Toolbar>
      
          <Typography variant="h6" align='left' className='navbar-typo-title'>
            Beef Reproduction Task Force
          </Typography>
          <Grid container justifyContent="flex-end">
            <IconButton href='https://www.facebook.com/beefrepro/' ><FacebookIcon /></IconButton>
            <IconButton href='https://twitter.com/beef_repro' ><TwitterIcon /></IconButton>
            <IconButton href='https://www.youtube.com/channel/UCLpZWNMIXm83qfMU-kqu_uA?view_as=subscriber' ><YoutubeIcon /></IconButton> 
          </Grid>
       
      </Toolbar>
      
    </AppBar>
    )
}

export default Navbar;