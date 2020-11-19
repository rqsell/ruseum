import React from 'react';
import 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function QRCodes(props) {
    return (
        <div className="carousel">
            <Carousel autoPlay className='carousel'>
        <div className="carouselitem" >
            <img alt="" src="./onoQR.png" className='caroimg'/>
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className="carouselitem">
            <img alt="" src="./kahloQR.png"className='caroimg' />
           
        </div>
        <div className="carouselitem">
            <img alt="" src="./kraterQR.png" className='caroimg'/>
           
        </div>
        <div className="carouselitem">
            <img alt="" src="goyaQR.png" className='caroimg' />
           
        </div>
        
    </Carousel>
        </div>
    );
}

export default QRCodes;