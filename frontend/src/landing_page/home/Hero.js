import React from 'react';

function Hero() {
    return (
        <div className="cotainer p-5 mb-5">

            <div className='row text-center'>


                <img src='\images\homeHero.png' alt='hero_image' className='mb-5' />

                <h1 className='mt-5'>Investing in Everything</h1>

                <p>Online platform toinvest in stocks,derivatives,mutual funds</p>


                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto" }}>Signup Now</button>
            </div>

        </div>

    );
}

export default Hero;