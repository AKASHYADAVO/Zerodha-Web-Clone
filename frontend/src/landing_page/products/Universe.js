import React from 'react';

function Universe({ imageURl,
    productName,
    productDecription,
    learnMore, }) {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                
                    <h1>The Zerodha Universe</h1>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>
            


                <div className='col-4 p-5 mt-5'>
                    <img src="/images/smallcaseLogo.png" />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>

                <div className='col-4 p-5 mt-5'>
                    < img style={{width:"150px"}} src="/images/streakLogo.png" />
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>

                <div className='col-4 p-5 mt-5'>
                    <img style={{width:"250px"}} src="/images/sensibullLogo.svg" />
                    <p className='text-small text-muted'>
                    Options trading platform</p>
                </div>


                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"250px"}}   src="/images/zerodhaFundhouse.png" />
                    <p className='text-small text-muted'>Asset management</p>
                </div>


                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"200px"}}  src="/images/tijori.svg" />
                    <p className='text-small text-muted'>Fundamental research platform</p>
                </div>


                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"200px"}} src="/images/ditto-logo.png" />
                    <p className='text-small text-muted'>Insurance</p>
                </div>



                <button className='p-2 btn btn-primary fs-5 mb-5 mt-4' style={{width:"20%", margin:"0 auto" }}>Signup Now</button>

                

            </div>

        </div>
    );
}

export default Universe;