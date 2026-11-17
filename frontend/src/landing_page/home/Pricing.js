import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-3'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='3'>Unbeatable pricing</h1>
                    <p className='mb-2'>We ploneered the concept of discount broking and price
                        transparency in India. Flate fees and no hiddeen charges.
                    </p>
                    <div className='mb-5'>
                        <a href='/pricing'>See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col border'>
                            <h1>&#8377;0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col border'>
                            <h1>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     );
}

export default Pricing;