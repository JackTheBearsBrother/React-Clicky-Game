import React from 'react';

const Navbar = () => (
<div className="container-fluid">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">React Clicky Game</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">You have guessed correctly</a>
      </li>
    </ul>
    <span className="navbar-text">Score: 0 | Top Score: 3</span>
  </div>
</nav>
</div>
);

export default Navbar;