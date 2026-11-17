import React from 'react';

function Hero() {
    return ( 
        <div className='container'p-5>
            <div className='row text-center'>
                <img src='/images/homeHero.png'alt='Hero Images'className='mb-5'/>
                <h1 className='mt-5'>Invest Is Everything</h1>
                <p>Onlone Plateform to Invest in Stocks,Derivatives,Mutual Funds</p>
                <button className='p-3' style={{width:"auto",lineHeight:"0.5",margin:"0 auto",backgroundColor:'skyblue'}}>signup now </button>

            </div>

        </div>
     );
}

export default Hero;