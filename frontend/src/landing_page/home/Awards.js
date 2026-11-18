import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-6 mb-5'>
                    <img src='/images/largestBroker.svg'alt='largestBrokerImage' style={{width:"70%"}}/>
                </div>
                <div className='col-6'>
                    <h1>Largest stock broker in India </h1>
                    <p>2+ million Zerodha clients contribute to over
                        15% of all retail order volumes in India daily
                        and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                        <li>Future and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                        <li>Stocks & IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and govt.securities</li>
                    </ul>
                        </div>
                    </div>
                    <div>
                        <img src='/images/pressLogos.png'alt='pressLogos'/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards ;