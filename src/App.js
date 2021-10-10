import React from 'react';
import './assets/css/App.css';
import Cards from './components/cards';
import Content from './components/content';

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
          <div class="each1">
          <a href="#">IN THEATHER</a>
          </div>
          <div class="each2">
          <a href="#">COMING SOON</a>
          </div>
          <div class="each3">
          <a href="#">MIDNIGHT</a>
          </div>
        </div>
        <div class="search">
          <div class="eachs">
            <input placeholder="Search...    🔎"/>
          </div>
          <div class="eachs">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png" height="30px" width="30px"/>
          </div>
        </div>
      </div>
      <Content/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,229.3C672,203,768,149,864,133.3C960,117,1056,139,1152,165.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
      <div class="titles">
        <div class="cast">
          <a href="#">CAST</a>
        </div>
        <div class="news">
          <a href="#">IN THE NEWS</a>
        </div>
        <div class="all-news">
          <a href="#">SEE ALL NEWS</a>
        </div>
      </div>
      <Cards/>
    </div>
  );
}

export default App;