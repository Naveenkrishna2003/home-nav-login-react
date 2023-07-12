import React from 'react';
// import Login from './login.js';
// import Signup from './signup.js';
import './playlist.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function Home() {
  return (
      <div className="body1">
    <div className="App1">
    <form className='form1'>
    <SearchIcon/>
    <input type='text' placeholder='Search' />
    </form>
      <nav className="navbar1">
        <div className="logo1">Music hits</div>
        <ul className="nav-links1">
          <li className="nav-item1">Home</li>
          <Link to="/sidepanel"><li className="nav-item1">Your Playlists</li></Link>
          <li className="nav-item1">All Time Hits</li>
          <li className="nav-item1">Singers</li>
          <li className="nav-item1">Profile</li>
          <Link to="/"><li className="drop1" >Login</li></Link>
        </ul>
      </nav>
        

        <div className="App1">
        <div className="content">
            <p>Your Playlist is Empty!</p>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Home;