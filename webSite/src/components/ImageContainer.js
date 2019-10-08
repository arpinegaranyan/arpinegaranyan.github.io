import React from 'react';
import Img from '../img.jpg';


function ImageContainer() {
    return(
        <>
        <div className="img-container"> 
            <div className="text">
                 Front <br/> 
                 End <br/> 
                 Developer<br/>
                 <span className="square1"><span className="letter">A</span></span>      
                 <span className="square2"><span className="letter">G</span> </span><br/>   
                 <span id="pp">I Create Modern & Creative Websites</span> 
            </div>
		    <img className="img" src={Img} alt="img" />
              
        </div>
          
            </>
    );
}

export default ImageContainer;