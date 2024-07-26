import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-6 p-5'>

                    <img src='/images/largestBroker.svg' alt='broker' />

                </div>

                <div className='col-6 p-4'>
 <h1 style={{fontSize:'2rem'}}>Largest stock broker in India</h1>
                    <p className='mb-3 mt-4'>
                        1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>


                    <div className='row mb-4'>
                        <div className='col-6'>
                            <ul>
                                <li className='mt-2'>Futures and Options</li>
                                <li className='mt-2'>Commodity derivatives</li>
                                <li className='mt-2'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='mt-2'> Stocks & IPOs</li>
                                <li className='mt-2'>irect mutual funds</li>
                                <li className='mt-2'>Bonds and Govt. Securities</li>
                            </ul>
                        </div>

                    </div>

                    <img src='images\pressLogos.png' alt='pressLogos' style={{ width: '90%' }} />
                </div>

            </div>
        </div>
    );
}

export default Awards;

