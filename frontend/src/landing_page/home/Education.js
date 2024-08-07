import React from 'react';

function Education() {
    return (
        <div className='container'>
            <div className='row'>
               
                <div className='col-6 mt-5'>
                   
                    <img style={{width:"80%"}} src='images/education.svg'/>
                </div>



                <div className='col-6'>
                    <h3 className='mt-5 text-muted fs-2'>  Free and open market education
                    </h3>

                    <p className='text-muted mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' className=' fs-5' style={{ textDecoration: 'none' }}>Varsity 
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    

                     <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' className=' fs-5' style={{ textDecoration: 'none' }}>TradingQ&A 
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    
                   

                </div>
            </div>

        </div>
    );
}

export default Education; 