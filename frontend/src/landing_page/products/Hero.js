import React from 'react';

function Hero() {
    return (  

        <div className='container  text-center mt-5 p-3 border-bottom mb-5' style={{marginTop:"150px", marginBottom:"120px"}}> 
        <h1 className='mt-3'>Technology</h1>
        <h3 className='mt-3 fs-5 text-muted'>Sleek, modern, and intuitive trading platforms</h3>
        <p className='mt-3 text-muted '>Check out our <a href='' style={{textDecoration:"none"}} >investment offerings  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> </p>
        </div>
       
    );
}

export default Hero ;