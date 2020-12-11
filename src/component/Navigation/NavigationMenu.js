import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function NavigationMenu(props) {

    return (
        <div>
            <div>
                <Link to = "/" className = "font-bold block pt-5" onClick={props.closeMenu}>
                    <a className="Murtuma text-4xl block object-cover h-full w-2/3 ml-auto mr-auto py-10" >MURTUMA</a>
                </Link>
            </div>

            <ul>
                <li><Link to = "/" className = "py-5 border-b block text-center" onClick={props.closeMenu}><p>EVENTS</p></Link></li>
                <li><Link to = "/" className = "py-5 border-b block text-center" onClick={props.closeMenu}>ARTIST</Link></li>
                <li><Link to = "/" className = "py-5 border-b block text-center" onClick={props.closeMenu}>MEDIA</Link></li>
                <li><Link to = "/" className = "py-5 border-b block text-center" onClick={props.closeMenu}>CONTACT</Link></li>

            </ul>
        </div>
    );
}

export default NavigationMenu