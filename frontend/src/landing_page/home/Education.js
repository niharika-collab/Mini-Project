import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mb-5'>
                    <img src='\images\education.svg'alt='image'/>
                </div>
                <div className='col-6'>
                    <h2 className='p-2'>Free and open market education</h2>
                    <p className='p-2'>Varsity, the largest online stock market education book in the world covering
                        everything from the basic to advanced trading.
                    </p>
                    <a href='https://zerodha.com/varsity/' target="_blank" rel="noopener noreferrer">Varsity</a>
                    <p className='mt-4 p-2'>Trading Q&A, the most active trading and investment community in India
                        for all your market related queries.
                    </p>
                    <a href='https://tradingqna.com/' target="_blank" rel="noopener noreferrer">TradingQ&A</a>
                </div>
            </div>
        </div>
     );
}

export default Education;