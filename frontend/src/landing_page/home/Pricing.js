import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
<div className='row'>
    <div className='col-4'>
        <h1 className='mt-5 fs-2 text-muted mb-4'>Unbeatable pricing
        </h1>
        <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <a href='#' className='m-3 fs-5' style={{textDecoration:'none'}}> See pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>

    </div>
    <div className='col-2'></div>
    <div className='col-6 '>
        <div className='row m-5 text-center'>
            <div className='col border p-3 ' >
                <h1 className='mb-5'>₹0</h1>
                <p className='text-muted'>Free equity delivery and direct mutual funds</p>
            </div><br/>
            <div className='col border p-3'>
                <h1 className='mb-5'>₹20 </h1>
                <p className='text-muted'>Intraday and F&O</p>
            </div>
        </div>
    </div>
</div>

        </div>
     );
}

export default Pricing ;