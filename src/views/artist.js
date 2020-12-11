import React from 'react';
import murtumaA from '../images/murtumaA.jfif'
import murtumaAN from '../images/murtumaAN.jfif'
import murtumaK from '../images/murtumaK.jfif'
import murtumaO from '../images/murtumaO.jfif'
import murtumaL from '../images/murtumaL.jpeg'

function Artist() {


    return(
        <div className="overflow-scroll mx-auto max-w-screen-lg max-h-full bg-black pt-16" >
            <li>  <img  className="object-center  my-auto mx-auto " src={murtumaA} alt="Logo" /></li>
            <li>  <img  className="object-center  my-auto mx-auto " src={murtumaAN} alt="Logo" /></li>
            <li>  <img  className="object-center  my-auto mx-auto " src={murtumaK} alt="Logo" /></li>
            <li>  <img  className="object-center  my-auto mx-auto " src={murtumaO} alt="Logo" /></li>
            <li>  <img  className="object-center  my-auto mx-auto " src={murtumaL} alt="Logo" /></li>
        </div>
    )

}

export default Artist