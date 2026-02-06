import React, { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import { ContactDropdown } from "./ContactDropdown";
import "../../custom.css";
import "../../Nav.css";

export const Nav = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleIcon = useCallback(() => {
        const icon = document.getElementById("menu-button");
        if (icon) icon.classList.toggle("change");
    }, []);

    const toggleDrawer = useCallback(() => {
        const drawerCheckbox = document.getElementById(
            "my-drawer"
        ) as HTMLInputElement;
        if (drawerCheckbox) {
            toggleIcon();
            drawerCheckbox.checked = !drawerCheckbox.checked;
        }
    }, [toggleIcon]);

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
    }, [toggleDrawer]);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 50);
                ticking = false;
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar sticky top-0 z-[1000] sticky-navbar ${isScrolled ? 'scrolled' : ''} flex flex-col md:flex-row py-2`}>
            <div className="drawer flex lg:hidden">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex">
                    <label
                        htmlFor="my-drawer"
                        className="btn bg-transparent border-none z-50 min-h-[44px] min-w-[44px] flex items-center justify-center -my-1"
                        aria-label="Open menu"
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
                            className={({ isActive }) => `btn btn-ghost ${isActive ? "font-semibold" : ""}`}
                            onClick={toggleDrawer}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/experience"
                            className={({ isActive }) => `btn btn-ghost ${isActive ? "font-semibold" : ""}`}
                            onClick={toggleDrawer}
                        >
                            Experience
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => `btn btn-ghost ${isActive ? "font-semibold" : ""}`}
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
            <nav className="md:gap-10 hidden lg:flex sm:text-xs text-primary nav-links">
                <NavLink
                    to="/"
                    state={{ from: location.pathname }}
                    className={({ isActive }) => `nav-link btn btn-ghost ${isActive ? "nav-link-active" : ""}`}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/experience"
                    state={{ from: location.pathname }}
                    className={({ isActive }) => `nav-link btn btn-ghost ${isActive ? "nav-link-active" : ""}`}
                >
                    Experience
                </NavLink>
                <NavLink
                    to="/projects"
                    state={{ from: location.pathname }}
                    className={({ isActive }) => `nav-link btn btn-ghost ${isActive ? "nav-link-active" : ""}`}
                >
                    Projects
                </NavLink>
            </nav>
            <div className="md:navbar-end md:justify-end md:mr-5" id="contact-dropdown">
                <div className="dropdown lg:dropdown-hover center-dropdown md:hidden">
                    <label
                        tabIndex={0}
                        className="m-auto btn btn-sm btn-ghost text-primary lg:hover:text-accent lg:hover:scale-105 transition-all min-h-[44px] px-4 touch-manipulation"
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
                        className="m-auto btn btn-xs md:btn-md btn-ghost text-primary lg:hover:text-accent lg:hover:scale-105 transition-all group"
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
