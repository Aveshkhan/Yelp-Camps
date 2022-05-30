import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import Bars from '../assets/Hamburger Menu.svg';
import close from '../assets/Close.svg';
import { useState } from 'react';


const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const ToggleSwitch = () => {

        toggle ? setToggle(false) : setToggle(true);

    }

    return (
        <div>
            <nav className='Navbar'>
                <div className="nav-left">
                    <NavLink to="/">
                        <img src={Logo} alt="" />
                    </NavLink>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </div>
                <div className="nav-right">
                    <NavLink to="/LoginPage" className='logout-link'>Login</NavLink>
                    <NavLink to="/SignUp" className='btn'>Create an account</NavLink>
                    {/* <span className="userName">johndoe</span>
                    <NavLink className="logout-link" to="#" >Logout</NavLink> */}
                </div>

            </nav>
            <nav className={toggle ? "responsiveNav navActive" : "responsiveNav"} >
                <div className="nav-left">
                    <NavLink to="/">
                        <img src={Logo} alt="" />
                    </NavLink>
                </div>
                <div className="nav-right">
                    <div className="Hamburger" onClick={ToggleSwitch}>
                        <img id='Bars' src={Bars} alt="" />
                        <img id='close' src={close} alt="" />
                    </div>
                </div>
                <div className="nav-bottom">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                    </ul>
                    <div className="account">
                        <NavLink to="/LoginPage" className='logout-link'>Login</NavLink>
                        <NavLink to="/SignUp" className='btn2'>Create an account</NavLink>
                        {/* <span className="userName">johndoe</span>
                        <NavLink className="logout-link" to="#" >Logout</NavLink> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar