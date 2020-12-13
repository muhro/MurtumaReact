import React from 'react';
import murtumaA from '../images/murtumaA.jfif'
import murtumaAN from '../images/murtumaAN.jfif'
import murtumaK from '../images/murtumaK.jfif'
import murtumaO from '../images/murtumaO.jfif'
import murtumaL from '../images/murtumaL.jpeg'
import murtumaR from '../images/murtumaR.jfif'

function Artist() {
    const murtumaAl = () => {
        window.location.href = "https://www.mixcloud.com/MURTUMA/murtuma-presents-antwon-blanc"
    }
    const murtumaANl = () => {
        window.location.href = "https://www.mixcloud.com/MURTUMA/murtuma-presents-andrew-moore-zagrave-depo-klub-zagreb-croatia-291119/"
    }
    const murtumaKl = () => {
        window.location.href = "https://www.mixcloud.com/MURTUMA/kobzev-murtuma-promo-mix/"
    }
    const murtumaOl = () => {
        window.location.href = "https://www.mixcloud.com/MURTUMA/murtuma-presents-surma/"
    }
    const murtumaRl = () => {
        window.location.href = "https://www.mixcloud.com/MURTUMA/murtuma-presents-r%C3%AFan/"
    }


    return(
        <div className=" h-auto bg-black pt-16 mb-auto  grid grid-cols-1 md:grid-cols-2" >
            <li>  <img  className="object-center my-auto mx-auto  max-h-full md:max-h-screen px-8 md:px-16 py-4 md:py-8" src={murtumaA} alt="Logo" onClick={murtumaAl}/></li>
            <li>  <img  className="object-center my-auto mx-auto  max-h-full md:max-h-screen px-8 md:px-16 py-4 md:py-8" src={murtumaAN} alt="Logo" onClick={murtumaANl}/></li>
            <li>  <img  className="object-center my-auto mx-auto  max-h-full md:max-h-screen px-8 md:px-16 py-4 md:py-8" src={murtumaK} alt="Logo" onClick={murtumaKl}/></li>
            <li>  <img  className="object-center my-auto mx-auto  max-h-full md:max-h-screen px-8 md:px-16 py-4 md:py-8" src={murtumaO} alt="Logo" onClick={murtumaOl}/></li>
            <li>  <img  className="object-center my-auto mx-auto  max-h-full md:max-h-screen px-8 md:px-16 py-4 md:py-8" src={murtumaR} alt="Logo" onClick={murtumaRl}/></li>
            <li>  <img  className="object-center my-auto mx-auto  max-h-full md:max-h-screen px-8 md:px-16 py-4 md:py-8" src={murtumaL} alt="Logo" /></li>
        </div>
    )

}

export default Artist