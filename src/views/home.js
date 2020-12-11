import React from 'react';
import landinPic from '../images/RedMarbleGrain1.png'

function Home() {


    return(
        <div className="container h-full mx-auto pb-10 flex ">
        <img  className="object-center my-auto mx-auto" src={landinPic} alt="Logo" />
        </div>
        )

}

export default Home