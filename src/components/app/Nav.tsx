import { Link, NavLink } from "react-router-dom";
import { Socials } from "../../components/app/Socials";
import "../../custom.css";

export const Nav = () => {
    function toggleDrawer() {
        const drawerCheckbox = document.getElementById(
            "my-drawer"
        ) as HTMLInputElement;
        if (drawerCheckbox) {
            drawerCheckbox.checked = !drawerCheckbox.checked;
        }
    }

    return (
        <div className="navbar flex flex-col md:flex-row flex-col my-2">
            <div className="drawer flex lg:hidden">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex">
                    <label
                        htmlFor="my-drawer"
                        className="btn bg-transparent border-none drawer-button "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-6 h-6 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                    <Link
                        to="/"
                        className="btn-ghost btn normal-case hover:bg-transparent"
                    >
                        <h1 className="text-primary lg:ml-2 font-semibold">
                            Ryan McDonough
                        </h1>
                    </Link>
                </div>
                <div className="drawer-side z-50">
                    <label
                        htmlFor="my-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-60 pt-20 gap-5 min-h-full bg-primary text-neutral drop-shadow-lg">
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
                <Link
                    to="/"
                    className="btn-ghost btn normal-case hover:bg-transparent"
                >
                    <h1 className="text-primary lg:ml-2 font-semibold">
                        Ryan McDonough
                    </h1>
                </Link>
            </div>
            <nav className="md:gap-10 hidden lg:flex sm:text-xs text-primary">
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
            </nav>
            <div
                className="md:navbar-end md:justify-end md:mr-5"
                id="contact-dropdown"
            >
                <div className="dropdown lg:dropdown-hover center-dropdown md:hidden">
                    <label
                        tabIndex={0}
                        className="m-auto btn btn-xs md:btn-md btn-ghost text-primary lg:hover:scale-105 transition-transform"
                    >
                        Contact
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-5 shadow rounded-box w-auto backdrop-blur-md items-center gap-2 bg-white bg-opacity-25 font-bold text-black"
                    >
                        McDonoughRyan95@gmail.com
                        <Socials />
                    </ul>
                </div>
                <div className="dropdown lg:dropdown-hover hidden md:block md:dropdown-end">
                    <label
                        tabIndex={0}
                        className="m-auto btn btn-xs md:btn-md btn-ghost text-primary lg:hover:scale-105 transition-transform"
                    >
                        Contact
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-5 shadow rounded-box w-auto backdrop-blur-md items-center gap-2 bg-white bg-opacity-25 font-bold text-black"
                    >
                        McDonoughRyan95@gmail.com
                        <Socials />
                    </ul>
                </div>
            </div>
        </div>
    );
};
