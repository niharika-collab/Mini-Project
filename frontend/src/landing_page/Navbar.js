import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light"
            style={{backgroundColor: "#FFF"}}>
                <Link className="navbar-brand" to="/">
                    <img src='\images\logo.svg'style={{width:"25%"}}alt='Zerodha' />
               </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
                    <form className="d-flex  my-lg-0">
                         
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/signup">signup </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">about</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/product">product </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/pricing">pricing</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/support">support</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/menu"><i className="fa fa-bars" aria-hidden="true"></i></Link>
                        </li>
                        
                            
                             
                         
                    </ul>
                    </form>
                </div>
            </nav>
        
    );
}

export default Navbar;
