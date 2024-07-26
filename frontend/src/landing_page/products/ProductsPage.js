import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return (  

<>
<Hero/>
<LeftSection 
 imageURl="/images/kite.png"
productName="Kite"
productDecription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
tryDemo=""
learnMore=""
googlPlay=""
appStroe=""
/>
<RightSection imageURl="/images/Console.png"
productName="Console"
productDecription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."

learnMore=""



/>

<LeftSection 
 imageURl="/images/coin.png"
productName="Coin"
productDecription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
tryDemo="Coin →"
learnMore=""
googlPlay=""
appStroe=""
/>

<RightSection 
imageURl="/images/kite.png"
productName="Kite Connect API
"
productDecription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."

learnMore=""

/>

<LeftSection 
 imageURl="/images/varsity.png"
productName="Varsity mobile"
productDecription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
tryDemo=""
learnMore=""
googlPlay=""
appStroe=""
/>

<p className='text-center fs-4 m-5 p-5' >Want to know more about our technology stack? Check out the <a style={{textDecoration:"none"}} href=''>Zerodha.tech</a> blog.</p>

<Universe/>
</>
    );
}

export default ProductPage;