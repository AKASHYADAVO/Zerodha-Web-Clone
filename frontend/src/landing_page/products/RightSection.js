import React from 'react';

function RightSection({  imageURl,
    productName,
    productDecription,
    learnMore,}) {
    return ( 
        <div className='container mt-5'>
        <div className='row'>          
            <div className='col-6 p-5 mt-5 '>
                <h1>{productName}</h1>
                <p className='text-muted'>{productDecription}</p>
                <div className='p-2 text-muted'>
                   
                    <a href={learnMore} style={{textDecoration:"none"}}>learnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                </div>
               

            </div>
            <div className='col-6'>
                <img src={imageURl} />
            </div>

        </div>

    </div>
     );
}

export default RightSection;