import React from 'react';
import LoginButton from './LoginButton';
import Pricing from './Pricing';
import { Link } from 'react-router-dom';
import SignUpButton from './SignUpButton';

export default function MainNav() {
    return (
        <>
        <nav class="navbar container-fluid p-3 navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
    <img src="" alt="" />
    <h1 className='h1 text-uppercase text-white text-decoration-none'>Formidable</h1></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <li className='nav-link'><LoginButton /></li>
      </li>
      <li className="nav-item">
      <li className='nav-link'><SignUpButton /></li>
      </li>
    
    </ul>
  </div>
</nav>  
        </>
    )
}