import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiGalaxy } from 'react-icons/gi';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth < 960) {
            setButton(false)
        } else {
            setButton(true)
        };

        window.addEventListener('resize', showButton);
    }

    useEffect(() => {
        showButton();
    }, [])

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/'
                        className="navbar-logo">
                        <GiGalaxy className='navbar-icon' />
                        Spacestagram
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>

                        <li className="nav-btn">
                            {button ? (
                                <a href="https://www.linkedin.com/in/yu-gao-a83295220/" className='btn-link'>
                                    <Button buttonStyle='btn--outline'>My LinkedIn</Button>
                                </a>

                            ) : (
                                <a href="https://www.linkedin.com/in/yu-gao-a83295220/" className='btn-link'>
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'>
                                        My LinkedIn
                                    </Button>
                                </a>

                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar


