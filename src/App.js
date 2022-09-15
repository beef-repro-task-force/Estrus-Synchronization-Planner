/**
 *  App.js
 *  Copyright (C) 2021  Andrew Stene, Ben Amos
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
 * 
 * edit: Erick Saenz has modified this application. send me questions at erksterx@gmail.com if you need help
 */
import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Header from './components/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './Footer';
import Help from './components/Help/Help';
import Reference from './components/Reference/Reference'
import { BrowserRouter as Router, Route} from "react-router-dom";

const App = () => {
  //Run url router
  return(
    <Router basename='/Estrus-Synchronization-Planner/'>
      
      <div className = "App" >
        <Header/>
        <AppBar position="static" className='navBar-area'>
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="#cf2e2e">
              Beef Reproduction Task Force
            </Typography>
          </Toolbar>
        </AppBar>
        <Route path = "/help"      component = { Help } />
        <Route path = "/reference" component = { Reference } />
        <Route path = "/" exact > <HomePage /> </Route>
        <Footer/>
      </div>
  </Router>
);

} /* end App */
export default App;
