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
            <nav className="md:gap-10 gap-0 sm:text-xs text-primary">
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
                    to="/projects"
                    className="btn btn-ghost md:hover:scale-105 transition-transform"
                >
                    Projects
                </NavLink>
                <div
                    className="md:navbar-end md:justify-end justify-center md:mr-5"
                    id="contact-dropdown"
                >
                    <div className="dropdown dropdown-hover dropdown-end">
                        <label
                            tabIndex={0}
                            className="m-auto btn btn-ghost text-primary md:hover:scale-105 transition-transform"
                        >
                            Contact
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-5 shadow rounded-box w-auto backdrop-blur-md bg-gray items-center gap-2 bg-white bg-opacity-25 font-bold"
                        >
                            McDonoughRyan95@gmail.com
                            <Socials />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
