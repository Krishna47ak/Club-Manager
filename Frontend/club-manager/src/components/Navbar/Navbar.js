import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Button from '../common/Button'
import './Navbar.css'


function Navbar({ isAuthenticated }) {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };
    useEffect(() => {
        showButton()
    }, []);
    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>ClubManager <i className="fab fa-typo3"></i></Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className='nav-item'><Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
                        <li className='nav-item'><Link to="/services" className='nav-links' onClick={closeMobileMenu}>Service</Link></li>
                        <li className='nav-item'><Link to="/products" className='nav-links' onClick={closeMobileMenu}>Products</Link></li>
                        { !isAuthenticated && <li className='nav-item'><Link to="/sign-in" className='nav-links' onClick={closeMobileMenu}>Sign In</Link></li>}
                    </ul>
                    {button && <Button isAuthenticated={isAuthenticated} buttonStyle="btn--outline">{ isAuthenticated ? 'Sign Out' : 'Sign Up'}</Button>}
                </div>
            </nav >
        </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Navbar)
