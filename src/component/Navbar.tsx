import React from 'react';
import './navbar.css'

function Navbar() {
  return (
    <div className="Navbar">

<nav className="navbar navbar-expand-lg bg-light ">
  <div className="container-fluid d-flex justify-content-around">
    <a className="navbar-brand" href="#">Youtube</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse search-form" id="navbarSupportedContent">
     
    
     
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
