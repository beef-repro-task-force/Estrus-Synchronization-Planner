import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';

import '../style/footer.css';

function Footer(){
    return(
        <Box sx={{ bgcolor: '#A23A41', color: 'grey.700' }}>

          <Container maxWidth="md" sx={{ py: 1 }}>
            
            <br/>

            <Grid item >
              <br/>
              <Typography variant="body1" component="a" display='block' className='link-grid-footer' href="/help">
                help
              </Typography>
              <Typography variant="body1" component="a" display='block' className='link-grid-footer' href="/reference">
                reference
              </Typography>
              <Typography variant="body1" component="a" display='block' className='link-grid-footer' href="https://beefrepro.org">
                Beef Repro Homepage
              </Typography>
            </Grid>

            <Grid container direction="row" justifyContent="flex-start" alignItems="center" className='icons-in-footer'>
              <IconButton href='https://www.facebook.com/beefrepro/' className='icon-btn-links' ><FacebookIcon /></IconButton>
              <IconButton href='https://twitter.com/beef_repro' ><TwitterIcon /></IconButton>
              <IconButton href='https://www.youtube.com/channel/UCLpZWNMIXm83qfMU-kqu_uA?view_as=subscriber' ><YoutubeIcon /></IconButton> 
            </Grid>

            <br/>

            <center><Typography variant="caption" align='center' className='copyright-footer-loc'>Copyright &copy; 2022  Beef Reproduction Task Force</Typography></center>
          </Container>
        </Box>
    );
}

export default Footer;