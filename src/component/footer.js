import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faSoundcloud} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';


function Footer() {

    const instagram = () => {
        window.location.href = "https://www.instagram.com/murtuma.berlin"
    }
    const facebook = () => {
        window.location.href = "https://www.facebook.com/murtuma.berlin"
    }
    const soundcloud = () => {
        window.location.href = "https://soundcloud.com/murtuma-berlin"
    }

    return (

        <footer className="text-white bg-black pt-4 w-full text-center pb-6 ">
            <div className = "">
                <FontAwesomeIcon
                    icon = {faInstagram}
                    className= "fa-2x "
                    onClick = {instagram}
                />
                <FontAwesomeIcon
                    icon = {faFacebook}
                    className= "fa-2x ml-6 mr-6 "
                    onClick = {facebook}
                />
                <FontAwesomeIcon
                    icon = {faSoundcloud}
                    className= "fa-2x md:mx-2"
                    onClick = {soundcloud}
                />


            </div>
        </footer>

    );
}
export default Footer