import React from 'react';
import './assets/css/App.css';

function App() {
  return (
    <div className="container">
      <div class="header">
        <div class="logo">
          <a>MOFISH</a>
        </div>
        <div class="menu">
          <div class="each">
          <a>IN THEATHER</a>
          </div>
          <div class="each">
          <a>COMING SOON</a>
          </div>
          <div class="each">
          <a>MIDNIGHT</a>
          </div>
        </div>
        <div class="search">
          <div class="eachs">
            <input placeholder="Search"/>
          </div>
          <div class="eachs">
          <img src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png" height="40px" width="40px"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
