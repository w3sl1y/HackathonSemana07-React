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
          <a>IN THEATHER</a>
          <a>COMING SOON</a>
          <a>MIDNIGHT</a>
        </div>
        <div class="search">
          <input placeholder="Search"/>
          <img src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png" height="40px" width="40px"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
