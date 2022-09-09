import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import '../scss/Header.scss';
import { useSelector } from "react-redux";
import logo from "../assets/logo.png"

export default function Header() {
    const { user } = useSelector(state => state.auth)
    return (
        <>
            <nav className="headerNav">
                <div className="container">
                    <NavLink to="/" className="headerNavLink headerLogoLink">
                        <div className="headerNavLinks">
                            <img className="headerLogo" src={logo} alt="Logo" />
                        </div>
                    </NavLink>
                    
                    
                    <NavLink to="/" className="headerNavLink">
                        <div className="headerNavLinks">Home</div>
                    </NavLink>
                    
                    
                    <NavLink to="/todo" className="headerNavLink">
                        <div className="headerNavLinks">TodoApp</div>
                    </NavLink>
                    
                    
                    <NavLink to="/money" className="headerNavLink">
                        <div className="headerNavLinks">Money</div>
                    </NavLink>
                    
                    {!user &&
                    <NavLink to="/login" className="headerNavLink">
                        <div className="headerNavLinks">
                            Login
                        </div>
                    </NavLink>
                    }
                    {user &&
                        <NavLink to="/profile" className="headerNavLink">
                            <div className="headerNavLinks">
                                Profile
                            </div>
                        </NavLink>
                    }
                </div>
            </nav>
            <Outlet />
        </>
    )
}