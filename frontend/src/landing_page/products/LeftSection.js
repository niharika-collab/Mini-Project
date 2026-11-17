import React from 'react';


function LeftSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
       <div className='container '>
        <div className='row'>
            <div className='col p-5  '>
                <img src={imageUrl} alt="Product Image"/>
            </div>
            <div className='col p-5 '>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href='{tryDemo}'>TryDemo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href='{learnMore}'style={{marginLeft:"50px"}}>LearnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i>  </a>
                </div>
                <div className='mt-3'>
                     <a href='{googlePlay}'><img src='\images\googlePlayBadge.svg' alt="GooglePlay Logo"/></a>
                <a href='{appStore}'><img src='\images\appstoreBadge.svg' alt="AppStore Logo"style={{marginLeft:"50px"}}/></a>
                </div>
               
            </div>
        </div>
       </div> 
     );
}

export default LeftSection;