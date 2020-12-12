import React from 'react';
import Navigation from './Navigation/Navigation';
import {Link} from "react-router-dom";

function Header() {

    return (
        <header className="text-white flex justify-center w-full py-6 items-center p-3 fixed ">
            <div className = "flex-1 inline-block"><Navigation /></div>


            <div className = "text-white flex-1 text-right  fixed right-3">
                <Link to="/">
                    <a className="Murtuma text-4xl block ml-auto mr-auto py-2"  > MURTUMA </a>
                </Link>
            </div>
        </header>
    );
}

export default Header