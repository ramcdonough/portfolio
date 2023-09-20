import { Link, NavLink } from "react-router-dom";
import { Socials } from "../../components/app/Socials";

export const Nav = () => {
    return (
        <div className="navbar flex flex-col md:flex-row sm:flex-col my-2">
            <div className="navbar-start w-full md:w-1/2 justify-center md:justify-start">
                <Link
                    to="/"
                    className="btn-ghost btn normal-case hover:bg-transparent"
                >
                    <h1 className="text-primary md:ml-5 font-semibold">
                        Ryan McDonough
                    </h1>
                </Link>
            </div>
            <nav className="md:gap-10 gap-7 sm:text-xs text-primary">
                <NavLink
                    to="/"
                    className="btn btn-ghost md:hover:scale-105 transition-transform"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/experience"
                    className="btn btn-ghost md:hover:scale-105 transition-transform"
                >
                    Experience
                </NavLink>
                <NavLink
                    to="/contact"
                    className="btn btn-ghost md:hover:scale-105 transition-transform"
                >
                    Contact
                </NavLink>
            </nav>
            <div className="navbar-end justify-center md:justify-end md:mr-5">
                <Socials />
            </div>
        </div>
    );
};
