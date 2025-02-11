import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import { ContactDropdown } from "./ContactDropdown";
import "../../custom.css";
import "../../Nav.css";

export const Nav = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const menuOptions = document.getElementById("menu-options");
            const menuButton = document.getElementById("menu-button");

            const drawerCheckbox = document.getElementById(
                "my-drawer"
            ) as HTMLInputElement;

            if (
                drawerCheckbox.checked &&
                !menuOptions?.contains(event.target as Node) &&
                !menuButton?.contains(event.target as Node)
            ) {
                // Click occurred outside the drawer and outside the menu options, close the drawer and toggle the icon
                toggleDrawer();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function toggleDrawer() {
        const drawerCheckbox = document.getElementById(
            "my-drawer"
        ) as HTMLInputElement;
        if (drawerCheckbox) {
            console.log("toggleDrawer");
            toggleIcon();
            drawerCheckbox.checked = !drawerCheckbox.checked;
        }
    }

    const toggleIcon = () => {
        const icon = document.getElementById("menu-button");
        if (icon) {
            console.log("toggleIcon");
            icon.classList.toggle("change");
        }
    };

    // Identify when the user scrolls down
    const handleScroll = () => {
        if (window.scrollY > 50) { // scroll threshold
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // Add event listener for scroll events
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar sticky-navbar ${isScrolled ? 'scrolled' : ''} flex flex-col md:flex-row py-2`}>
            <div className="drawer flex lg:hidden">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex">
                    <label
                        htmlFor="my-drawer"
                        className="btn bg-transparent border-none z-50"
                    >
                        <div
                            className="container"
                            id="menu-button"
                            onClick={toggleIcon}
                        >
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </label>
                    <Link
                        to="/"
                        className="btn-ghost btn normal-case hover:bg-transparent"
                    >
                        <h1 className="text-primary text-xl lg:ml-2 font-semibold">
                            Ryan McDonough
                        </h1>
                    </Link>
                </div>
                <div className="drawer-side z-10">
                    <label
                        htmlFor="my-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul
                        className="menu p-4 w-60 pt-20 gap-5 min-h-full bg-secondary text-primary drop-shadow-lg"
                        id="menu-options"
                    >
                        <NavLink
                            to="/"
                            className="btn btn-ghost md:hover:scale-105 transition-transform"
                            onClick={toggleDrawer}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/experience"
                            className="btn btn-ghost md:hover:scale-105 transition-transform"
                            onClick={toggleDrawer}
                        >
                            Experience
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className="btn btn-ghost md:hover:scale-105 transition-transform"
                            onClick={toggleDrawer}
                        >
                            Projects
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className="navbar-start w-full md:w-1/2 justify-center md:justify-start hidden lg:flex">
                <Link to="/" className="btn-ghost btn normal-case hover:bg-transparent">
                    <h1 className="text-primary text-xl lg:ml-2 font-semibold">
                        Ryan McDonough
                    </h1>
                </Link>
            </div>
            <nav className="md:gap-10 hidden lg:flex sm:text-xs text-primary">
                <NavLink
                    to="/"
                    state={{ from: location.pathname }}
                    className="btn btn-ghost md:hover:scale-105 transition-transform"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/experience"
                    state={{ from: location.pathname }}
                    className="btn btn-ghost md:hover:scale-105 transition-transform"
                >
                    Experience
                </NavLink>
                <NavLink
                    to="/projects"
                    state={{ from: location.pathname }}
                    className="btn btn-ghost md:hover:scale-105 transition-transform"
                >
                    Projects
                </NavLink>
            </nav>
            <div className="md:navbar-end md:justify-end md:mr-5" id="contact-dropdown">
                <div className="dropdown lg:dropdown-hover center-dropdown md:hidden">
                    <label
                        tabIndex={0}
                        className="m-auto btn btn-xs md:btn-md btn-ghost text-primary lg:hover:scale-105 transition-transform"
                    >
                        Contact
                    </label>
                    <div tabIndex={0} className="dropdown-content z-[999]">
                        <ContactDropdown />
                    </div>
                </div>
                <div className="dropdown lg:dropdown-hover hidden md:block md:dropdown-end">
                    <label
                        tabIndex={0}
                        className="m-auto btn btn-xs md:btn-md btn-ghost text-primary lg:hover:scale-105 transition-transform group"
                    >
                        Contact
                    </label>
                    <div tabIndex={0} className="dropdown-content z-[1] group-hover:block">
                        <ContactDropdown />
                    </div>
                </div>
            </div>
        </div>
    );
};
