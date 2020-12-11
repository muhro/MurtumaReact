import React from 'react';
import Navigation from './Navigation/Navigation';
import {Link} from "react-router-dom";

function Header() {

    return (
        <header className="text-white flex justify-center items-center p-3">
            <div className = "flex-1"><Navigation /></div>


            <div className = "text-white flex-1 text-right ">
                <Link to="/">
                    <a className="Murtuma text-4xl block ml-auto mr-auto py-2" > MURTUMA </a>
                </Link>
            </div>
        </header>
    );
}

export default Header