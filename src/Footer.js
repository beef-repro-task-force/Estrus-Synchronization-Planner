/**
 *  Footer.js
 *  Copyright (C) 2021  Andrew Stene
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *   
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import YoutubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './Footer.css';

/**
 * React component that represents the static footer at the 
 * bottom of the page
 */
function Footer()
{
    return (
        /*<div className= "Footer">
            <ul>
            <li><Link to = "/help" >Help</Link></li>
            <li><Link to = "/reference" >Reference</Link></li>
            <li><a href = "https://beefrepro.org" >Beef Reproduction Task Force Homepage</a></li>
            </ul>
        </div>*/
        <Box sx={{ bgcolor: '#A23A41', color: 'grey.700' }}>

          <Container maxWidth="md" sx={{ py: 6 }}>
            
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

            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
              <IconButton href='https://www.facebook.com/beefrepro/' className='icon-btn-links' ><FacebookIcon /></IconButton>
              <IconButton href='https://twitter.com/beef_repro' ><TwitterIcon /></IconButton>
              <IconButton href='https://www.youtube.com/channel/UCLpZWNMIXm83qfMU-kqu_uA?view_as=subscriber' ><YoutubeIcon /></IconButton> 
            </Grid>

            <br/>

            <center><Typography variant="caption" align='center' className='copyright-footer-loc'>Copyright &copy; 2022  Beef Reproduction Task Force</Typography></center>
          </Container>
        </Box>
    );

} /* Footer() */
export default Footer;