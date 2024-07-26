import React from 'react';

function Signup() {
    return (

            <div className='row mt-5 '>


                <div className='col-5 p-4'>
                    <img src='/images/loginimg.png' />
                </div>

                <div className='col-2 m-4'></div>

                <div className='col-3 m-4'>
                    <h1 className='p-2'>Signup now</h1>
                    <h4 className='p-2 text-muted ' style={{fontSize:"18px"}}>Or track your existing application.</h4>
                    <input className='p-2' placeholder='+91 Enter Phone_No' type='number'></input>
                    <p className='p-2'>You will receive an OTP on your number</p>

                    <a className='p-2 text-center' style={{backgroundColor:"#387ed1", color:"white", textDecoration:"none",width:"50px"}} href=''>Continue</a>
<br/>
<br/>

                    <a style={{textDecoration:"none"}} href='' className='mt-5'>Want to open an NRI account?</a>
                </div>

                <div className='text-center m-5 text-muted fs-8'>
                    <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>
                    <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a style={{textDecoration:"none"}} href='' >offline forms.</a>  For help,<a style={{textDecoration:"none"}} href='' >click here.</a></p>
                </div>

            </div>
            
            
            




    );
}

export default Signup;