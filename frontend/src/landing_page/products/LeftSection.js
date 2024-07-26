import React from 'react';

function LeftSection({
    imageURl,
    productName,
    productDecription,
    tryDemo,
    learnMore,
    googlPlay,
    appStroe,



}) {
    return (

        <div className='container'>
            <div className='row'>

                <div className='col-6'>
                    <img src={imageURl} />
                </div>

                
                <div className='col-6 p-5 mt-5 '>
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDecription}</p>
                    <div className='p-2'>
                        <a href={tryDemo} className='mt-5' style={{textDecoration:"none"}}>tryDemo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft:"100px", textDecoration:"none"}} >learnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='p-2'>
                        <a href={googlPlay}><img src='/images/googlePlayBadge.svg' /></a>
                        <a href={appStroe} style={{marginLeft:"50px"}}><img src='/images/appstoreBadge.svg' /></a>
                    </div>


                </div>

            </div>

        </div>

    );
}

export default LeftSection;