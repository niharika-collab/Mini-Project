import React from 'react';

function Brokerage() {
    return ( 
       <div className='container'>
        <div className='row p-4 mt-5 text-center'>
            <div className='col-8 p-4'>
                <h1 className='fs-5'><a href=''style={{textDecorationLine:"none"}}>Brokerage calculator</a></h1>
                <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"12px"}}>
                    <li>
                        Call & Trade and RMS auto-squareofff:Additional charges of &#8377;50 + GST per order.
                    </li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>physical copies of contract note. Courier charges apply.</li>
                </ul>
            </div>
            <div className='col-4 p-4'>
                <h1 className='fs-5'><a href=''style={{textDecorationLine:"none"}}>List of charges</a></h1>
            </div>
        </div>
       </div>
     );
}

export default Brokerage;
