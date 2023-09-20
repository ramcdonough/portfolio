import { Link, NavLink } from "react-router-dom";
import { Socials } from "../../components/app/Socials";

export const Nav = () => {
    return (
        <div className="navbar flex flex-col md:flex-row sm:flex-col">
            <div className="navbar-start w-full md:w-1/2 justify-center md:justify-start">
                <Link to="/" className="hover:scale-105 transition-transform">
                    <h3 className="text-primary md:ml-5 font-semibold">
                        Ryan McDonough
                    </h3>
                </Link>
            </div>
            <nav className="lg:gap-10 sm:gap-20 sm:text-xs text-primary">
                <NavLink
                    to="/"
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
            <div className="navbar-end justify-center">
                <Socials />
            </div>
        </div>
    );
};
