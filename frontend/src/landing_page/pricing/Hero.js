import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 text-center mt-5 '>
            <div className='row mb-5'>
                <h1>Charges</h1>
                <p>List of all charges and taxes</p>
            </div>
            <div className='row p-4 mt-5'>
                <div className='col'>
                    <img src='\images\pricing0.svg'alt='imagepricing0'/>
                    <h1 className='p-4'style={{fontSize:"30px"}}>Free equity delivery</h1>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col'>
                    <img src='\images\pricing20.svg'alt='imagepricing20'/>
                    <h1 className='p-4'style={{fontSize:"30px"}}>Intraday and F&O trades</h1>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col'>
                    <img src='\images\pricingMF.svg'alt='imagepricingMF'/>
                    <h1 className='p-4'style={{fontSize:"30px"}}>Free direct MF</h1>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
           
     );
}

export default Hero;
<h1>Hero</h1>