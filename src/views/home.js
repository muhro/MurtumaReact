import React from 'react';
import landinPic from '../images/RedMarbleGrain1.png'

function Home() {


    return(
        <div className="container h-full mx-auto pb-10 flex mb-auto">
        <img  className="object-center my-auto mx-auto  max-h-full md:max-h-screen " src={landinPic} alt="Logo" />
        </div>
        )

}

export default Home