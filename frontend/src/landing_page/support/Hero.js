import React from 'react';

function Hero() {
    return ( 
        <div className='p-4'style={{backgroundColor:"#eef2f5"}}>
            <h1 className='mt-2'>Support Portal</h1>
            <div className='p-4'style={{textAlign:"right"}}><button type="button" class="btn btn-primary">My tickets</button>
            </div>
         <div className="input-group mb-3 p-4 mt-3 mb-3" style={{width:"100%"}}>
          <button className="btn btn-outline-secondary" type="button" ><i class="fa fa-search" aria-hidden="true"></i></button>
         <input type="text" className="form-control" placeholder="Eg:How do i open my account,How do i activate F&O" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
         
     </div>
    </div>
     );
}

export default Hero;
