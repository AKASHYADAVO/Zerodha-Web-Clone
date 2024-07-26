import React from 'react';

function Hero() {
    return (
        <section  className='container-flex ' id='supportHero'>
            <div className='p-5' id="supportWrapper" >
                <h4>Support Portal</h4>
                <a href='' style={{ color: "white" }}>Track tickets</a>
            </div>

            <div  className='row p-5  mb-5'  >


                <div className=' col p-5  mb-5'   >

                    <h2 className='mb-5'>Search for an answer or browse help topics to create a ticket
                    </h2>

                    <input placeholder='
Eg: how do i activate F&O, why is my order getting rejected ...        
   '   ></input>

<div className='section  mt-3'>
                    <a href='' >Track account opening </a>
                    <a href='' >Track segment activation </a>
                    <a href='' > Intraday margins </a>
                    <a href='' >Kite user manual</a>
</div>
                 



                </div>

                <div className='col p-5  mb-5'  >
                    <h2> Featured
                    </h2>
                    <ol>
                        <li><a href=''>Current Takeovers and Delisting - July 2024</a></li>
                        <li><a href=''>Surveillance measure on scrips - July 2024</a></li>

                    </ol>

                </div>


            </div>


        </section>
    );
}

export default Hero;