import React from 'react';

function GetStarted(props) {
    return (
        <div className='page'>
        <div className='start'>
       <h1> Get Started</h1>
<span id='appintro'>Welcome to Ruseum! Here we believe that art appreciation is universal and should be accessible for all ages. To help your child learn about a wide variety of art we have created this app which utilizes QR codes to transform any room into a personal museum. </span>
 <ol>
<li>Navigate to the QRCode page. You have the option of printing out our museum package and taping the codes directly to the wall for hands on exploration or if you have access to two screens feel free to use our QR slideshow</li>
<li>Now you are ready to start! Head over to our Explore page</li>
<li>Click on the Magnifying Glass icon</li>
<li>Point your camera at the code</li>
<li>A painting icon will appear. Tap on that and voilà! You have discovered the first painting.</li>
<li>To continue the experience click the Keep Exploring button.</li>
</ol>

            
        </div>
        </div>
    );
}

export default GetStarted;