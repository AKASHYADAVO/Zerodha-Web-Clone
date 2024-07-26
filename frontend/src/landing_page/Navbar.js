import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    

            <nav class="navbar navbar-expand-lg navbar-light border-bottom " style={{backgroundColor:'#fff',width:'100%'}}>
              <div className='container'>  <Link class="navbar-brand m-2 " to="/"> 
                    <img  src='images/logo.svg'alt='logo' style={{width:'25%', marginLeft:"50px"}}/> 
                </Link>
                <button class="navbar-toggler m-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                       
                        <li class="nav-item ">
                            <Link class="nav-link" to="signup">Signup</Link>
                        </li>

                        <li class="nav-item ">
                            <Link class="nav-link" to="about">About</Link>
                        </li>

                        <li class="nav-item ">
                            <Link class="nav-link" to="product">Products  </Link>
                        </li>

                        <li class="nav-item ">
                            <Link class="nav-link" to="pricing">Pricing</Link>
                        </li>

                        <li class="nav-item ">
                            <Link class="nav-link" to="support">Support</Link
                            
                            >
                        </li>


                        <li class="nav-item ">
                            <a class="nav-link" href="http://localhost:3001/"><i class="fa fa-bars" aria-hidden="true"></i></a>
                        </li>


                        
                       
                     </ul>
                </div>
                </div>
            </nav>

        
    );
}

export default Navbar;