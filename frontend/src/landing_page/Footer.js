import React from 'react';

function Footer() {
    
    return ( 
      

       <div className='container  mt-5'>
        <div className='row'>
            <div className='col-3'>
                <img src='\images\logo.svg'style={{width:"50%"}} />
                <p>&copy;2010-2024,Not Zerodha Broking Ltd.<br/>
                   All rights reserved.
                </p><br/>
                <img src=''/>
            </div>
            <div className='col'>
                 <p>company</p>
                <a href=''>About</a> <br/>
                <a href=''>Products</a><br/> 
                <a href=''>Pricing</a><br/> 
                <a href=''>Referralprogramme</a> <br/>
                <a href=''>Careers</a><br/> 
                <a href=''>Zerodha.tech</a><br/> 
                <a href=''>Press & media</a> <br/>
                <a href=''>Zerodha cares(CSR) </a><br/>      
            </div>
            <div className='col'>
                <p>Support</p>
                <a href=''>contact</a> <br/>
                <a href=''>Support portal</a><br/> 
                <a href=''>Z-Connect blog</a><br/> 
                <a href=''>List of charges</a> <br/>
                <a href=''>Downloads & resources</a><br/> 
                
            </div>
            <div className='col'>
                <p>Account</p>
                <a href=''>Open an account</a> <br/>
                <a href=''>Fund transfer</a><br/> 
                <a href=''>60 day challenge</a><br/> 
            </div>
        </div>
       </div>
       
     );
}

export default Footer;