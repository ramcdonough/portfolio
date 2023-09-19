import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <div className="navbar">
            <div className="navbar-start"></div>
            <nav className="lg:gap-10 sm:gap-20 sm:text-xs text-primary">
                <NavLink
                    to="/profile"
                    className="btn btn-ghost hover:scale-105 transition-transform"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/experience"
                    className="btn btn-ghost hover:scale-105 transition-transform"
                >
                    Experience
                </NavLink>
                <NavLink
                    to="/contact"
                    className="btn btn-ghost hover:scale-105 transition-transform"
                >
                    Contact
                </NavLink>
            </nav>
            <div className="navbar-end"></div>
        </div>
    );
};
