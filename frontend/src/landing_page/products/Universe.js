import React from 'react';

function Universe() {
    return (
        <div className='container mt-5 p-4 text-center'>
            <div className='row'>
                <h1 className='p-4'>The Zerodha Universe</h1> 
                <p>Extend your trading and investment experience even further with our partner platforms</p>               
            </div>
            <div className='row p-5'>
                <div className='col p-5'>
                    <div className='mb-5'>
                    <img src='\images\zerodhaFundhouse.png'style={{width:"60%"}}alt="Investment platform"/>
                    <p className='mt-4'>Our asset management venture <br/>that is creating simple and transparent index<br/>funds to help you save for your goals</p>
                    </div>
                    <div>
                    <img src='\images\streakLogo.png'style={{width:"60%"}} alt="Trading platform"/>
                    <p className='mt-4'>Our asset management venture <br/>that is creating simple and transparent index<br/>funds to help you save for your goals</p>
                    </div>
                </div>
                <div className='col p-5 '>
                    <div className='mb-5'>
                    <img src='\images\sensibullLogo.svg'style={{width:"60%"}} alt="Product Image"/>
                    <p className='mt-4'>Our asset management venture <br/>that is creating simple and transparent index<br/>funds to help you save for your goals</p>
                    </div>
                     <div>
                    <img src='\images\smallcaseLogo.png'style={{width:"60%"}} alt="Smallcase"/>
                    <p className='mt-4'>Our asset management venture <br/>that is creating simple and transparent index<br/>funds to help you save for your goals</p>
                    </div>
                </div>
                <div className='col p-5'>
                    
                    <div className='mb-5'>
                    <img src='\images\sensibullLogo.svg'style={{width:"60%"}} alt="Sensible Image"/>
                    <p className='mt-4'>Our asset management venture <br/>that is creating simple and transparent index<br/>funds to help you save for your goals</p>
                    </div>
                     <div>
                    <img src='\images\dittoLogo.png'style={{width:"60%"}} alt="Ditto logo"/>
                    <p className='mt-4'>Our asset management venture <br/>that is creating simple and transparent index<br/>funds to help you save for your goals</p>
                    </div>
                </div>
                </div>
           
        </div>
        
            
       
     );
}

export default Universe;