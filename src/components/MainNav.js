import React from 'react';
import LoginButton from './LoginButton';
import Pricing from './Pricing';
import { Link } from 'react-router-dom';
import SignUpButton from './SignUpButton';

export default function MainNav() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
    <Link to="/" class="navbar-brand"><h3 className="text-white h3">Formidable</h3></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto text-end mb-2 mb-lg-0">
        
        <li class="nav-item">
          <Link to="/login" className="nav-link"><LoginButton /></Link>
        </li>
        <li class="nav-item">
          <Link to="/signup" className="nav-link"><SignUpButton /></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
        </>
    )
}