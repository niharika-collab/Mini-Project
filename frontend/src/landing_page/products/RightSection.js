import React from 'react';

function RightSection({productName,productDescription,lernMore,imageUrl}) {
    return ( 
        <div className='container p-4'>
            <div className='row'>
                <div className='col mt-5 '>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href='{learnMore}'>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col '>
                    <img src={imageUrl}alt="Product illustration"/>
                </div>
            </div>
            
        </div>
     );
}

export default RightSection;