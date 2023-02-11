import React from 'react';
import Footer from "./Footer";
import './Navbar.css';



const Navbar = () => {
    return (
        <nav className='nav'>
                <div>
                    <Footer />
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
        </nav>
    )
}

export default Navbar;