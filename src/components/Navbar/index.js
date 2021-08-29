import React from "react";
import { FaBars } from "react-icons/fa";
import "../../styles/Navbar.css";
import Dropdown from "../Dropdown";

export default function NavBar() {
    const AlbumsRoute = () => {
        return <Dropdown />;
    };
    // <div style={{ alignSelf: "center", color: "#3F51B5", padding: "55px" }}>Albums</div>
    // console.log("hi");

    return (
        //     import React from 'react';
        // import {
        //     Nav,
        //     NavLink,
        //     Bars,
        //     NavMenu,
        //     NavBtn,
        //     NavBtnLink,
        // } from './NavbarElements';

        <>
            <div className="Nav">
                <div className="Bars">
                    <FaBars />
                    <Dropdown />

                </div>

                <div className="NavMenu">
                    <div className="NavLink" to="/about">
                        About
                    </div>
                    <div className="NavLink" to="/events">
                        Events
                    </div>
                    <div className="NavLink" to="/annual">
                        Annual Report
                    </div>
                    <div className="NavLink" to="/team">
                        Teams
                    </div>
                    <div className="NavLink" to="/blogs">
                        Blogs
                    </div>
                    <div className="NavLink" to="/sign-up" onClick={AlbumsRoute}>
                        Sign Up
                    </div>

                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </div>
                <div className="NavBtn">
                    <div className="NavBtnLink" to="/signin">
                        Sign In
                    </div>
                </div>
            </div>
        </>
    );
}
