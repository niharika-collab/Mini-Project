import React from 'react';

function Footer() {
    
    return ( 
      

       <div className='container  mt-5'>
        <div className='row'>
            <div className='col-3'>
                <img src='\images\logo.svg'style={{width:"50%"}} alt='logo'/>
                <p>&copy;2010-2024,Not Zerodha Broking Ltd.<br/>
                   All rights reserved.
                </p><br/>
                
            </div>
            <div className='col'>
                 <p>company</p>
                <a href='https://zerodha.com/about/ target="_blank" rel="noopener noreferrer"'>About</a> <br/>
                <a href='https://zerodha.com/products/ target="_blank" rel="noopener noreferrer"'>Products</a><br/> 
                <a href='https://zerodha.com/pricing/ target="_blank" rel="noopener noreferrer"'>Pricing</a><br/> 
                <a href='https://zerodha.com/referral/ target="_blank" rel="noopener noreferrer"'>Referralprogramme</a> <br/>
                <a href='https://zerodha.com/careers/ target="_blank" rel="noopener noreferrer"'>Careers</a><br/> 
                <a href='https://zerodha.tech/ target="_blank" rel="noopener noreferrer"'>Zerodha.tech</a><br/> 
                <a href='https://zerodha.com/media/ target="_blank" rel="noopener noreferrer"'>Press & media</a> <br/>
                <a href='https://zerodha.com/contact/ target="_blank" rel="noopener noreferrer"'>Zerodha cares(CSR) </a><br/>      
            </div>
            <div className='col'>
                <p>Support</p>
                <a href='https://zerodha.com/contact/ target="_blank" rel="noopener noreferrer"'>contact</a> <br/>
                <a href='https://support.zerodha.com/ target="_blank" rel="noopener noreferrer"'>Support portal</a><br/> 
                <a href='https://support.zerodha.com/ target="_blank" rel="noopener noreferrer"'>Z-Connect blog</a><br/> 
                <a href='https://support.zerodha.com/ target="_blank" rel="noopener noreferrer"'>List of charges</a> <br/>
                <a href='https://support.zerodha.com/ target="_blank" rel="noopener noreferrer"'>Downloads & resources</a><br/> 
                
            </div>
            <div className='col'>
                <p>Account</p>
                <a href='https://support.zerodha.com/ target="_blank" rel="noopener noreferrer"'>Open an account</a> <br/>
                <a href='https://support.zerodha.com/ target="_blank" rel="noopener noreferrer"'>Fund transfer</a><br/> 
                <a href='https://support.zerodha.com/ target="_blank" rel="noopener noreferrer"'>60 day challenge</a><br/> 
            </div>
        </div>
       </div>
       
     );
}

export default Footer;