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
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

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
       

          <Typography>
            Questions? Call 007-803-321-2130
          </Typography>

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                
                  <Icon>
                    Facebook
                  </Icon>
                  <Typography variant="caption" component="a" href="#">
                    Investor Relations
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Privacy
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Speed Test
                  </Typography>
                
              </Grid>
              <Grid item xs={6} md={3}>
                
                  <Typography variant="caption" component="a" href="#">
                    Help Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Jobs
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Cookie Preferences
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Legal Notices
                  </Typography>
                
              </Grid>
              <Grid item xs={6} md={3}>
               
                  <Typography variant="caption" component="a" href="#">
                    Account
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Ways to Watch
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Corporate Information
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Only on Netflix
                  </Typography>
              
              </Grid>
              <Grid item xs={6} md={3}>
                
                  <Typography variant="caption" component="a" href="#">
                    Media Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Terms of Use
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Contact Us
                  </Typography>
            
              </Grid>

            </Grid>
          </Box>

          <br/>

          <Typography variant="caption">Copyright &copy; 2022  Beef Reproduction Task Force</Typography>

      </Container>

    </Box>
  );


} /* Footer() */
export default Footer;