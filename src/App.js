import React from 'react';
import './assets/css/App.css';

function App() {
  return (
    <div className="container">
      <div class="header">
        <div class="logo">
        <div class="cam">
          <img src="https://cdn-icons-png.flaticon.com/512/173/173450.png" height="30px" width="30px"/>
          </div>
          <div class="mofish">
          <a href="#">MOFISH</a>
          </div>
        </div>
        <div class="menu">
          <div class="each">
          <a href="#">IN THEATHER</a>
          </div>
          <div class="each">
          <a href="#">COMING SOON</a>
          </div>
          <div class="each">
          <a href="#">MIDNIGHT</a>
          </div>
        </div>
        <div class="search">
          <div class="eachs">
            <input placeholder="Search..."/>
          </div>
          <div class="eachs">
          <img src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png" height="40px" width="40px"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
