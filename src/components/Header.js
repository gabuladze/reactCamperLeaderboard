import React from 'react';

const Header = () =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <span className="navbar-brand">Free Code Camp Leaderboard</span>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="https://github.com/gabuladze/reactCamperLeaderboard" target="_blank">Github repo</a></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Header;