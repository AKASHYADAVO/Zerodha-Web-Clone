import React from 'react';

function Team() {
    return (  
        <div className='container'>

        <div className='row mt-5'style={{ marginTop:"4rem", marginBottom:"4rem"}}>

            <h1 className=' text-center'>About Me</h1>

        </div>




        <div className='row p-3 text-muted'style={{lineHeight:"1.3", fontSize:"1.1em ", }}>
            
            
            
            <div className='col-6'style={{textAlign:"center"}}>

<img  src='images/AKASH.jpeg ' style={{borderRadius:"100%", width:"30%"}}/>

<div className='container mt-3'>
    <h3>AKASH YADAV</h3>

    <p>IT ENGINEER / FullStack Developer</p>
    
    </div>

            </div>


            <div className='col-6 text-muted' style={{ textDecoration:"none"}}>

          <p>Pursuing Bachelor Of Engineering in the Field of IT  at Vasantdada Patil Pratishthan's College of Engineering and visual arts</p><br/> 

        <br/> 

          Connect on <a style={{ textDecoration:"none"}}href='https://github.com/AKASHYADAVO'>GitHub </a>/<a  style={{ textDecoration:"none"}}href='https://www.linkedin.com/in/akash-yadav-2815b2217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> Linkedin  </a> /<a style={{ textDecoration:"none"}} href='https://discord.com/invite/upzZRDp4'> Discord</a>/<a style={{ textDecoration:"none"}}href='https://whatsapp.com/channel/0029VajAPUoAu3aNrOVow30z'>Whatapp </a>/<a style={{ textDecoration:"none"}}href='https://www.youtube.com/@EtherCoders'>YouTube </a><br/> 

            </div>

        </div>

    </div>
    
    );
}

export default Team;