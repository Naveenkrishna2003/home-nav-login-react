import React from 'react';
// import Login from './login.js';
// import Signup from './signup.js';
import './navbar.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Button} from "@mui/material";
function Home() {
  return (
      <div className="body">
    <div className="App">
    <form className='form'>
    <SearchIcon/>
    <input type='text' placeholder='Search' />
    </form>
      <nav className="navbar">
        <div className="logo">Music hits</div>
        <ul className="nav-links">
          <li className="nav-item">Home</li>
          <Link to="/sidepanel"><li className="nav-item">Your Playlists</li></Link>
          <li className="nav-item">All Time Hits</li>
          <li className="nav-item">Singers</li>
          <Link to="/profile"><li className="nav-item">Profile</li></Link>
          <Link to="/"><li className="drop" >Login</li></Link>
        </ul>
      </nav>
        <div className="content1">
            <h1>Welcome to Music hits</h1>
            <p>Enjoy your music journey</p>
        </div>

        <div className="App">
    
      </div>

      </div>
      <div className="footer">
    <Button className='footer_button'>terms and condition</Button>
    <Button className='footer_button'>Privacy policy</Button>
    <Button className='footer_button'>FAQ</Button>
    </div>
    </div>
  );
}

export default Home;