import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h2 fs-4>Customer-first always</h2>
                    <p>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+
                        lakh crores worth of equity investments.
                    </p>
                    <h2 fs-4>No spam or gimmicks</h2>
                    <p>No gimmicks,spam,"gamification",or annoying push
                        notification.High quality apps that you use at your pace the way you like.
                    </p>
                    <h2 fs-4>THe Zerodha universe</h2>
                    <p>Not just an app, but a whole ecosystem.Our investments in
                    30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 fs-4>Do better with money</h2>
                    <p>with initiatives like Nudge and kill Switch</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='/images/ecosystem.png'alt='ecosystem image'style={{width:"110%"}}/>
                    <div>
                        <a href='' className='mx-5'>Explore our products</a>
                        <a href=''>Try kite</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;