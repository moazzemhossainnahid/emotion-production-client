import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/Public/Logo.png";
import { NavbarData } from "../../../Data/NavbarData";

const Navbar = () => {

    return (
        <nav>
            <div className={`marginBottomNavbar`}>
                <div className={`sticky-top bg-[#211F20]`}>
                    <div className="flex justify-between z-50 items-center container py-1">
                        <div className="hidden md:block w-1/5">
                            <Link to="/" scroll legacyBehavior>

                                <img
                                    className="logo"
                                    src={logo}
                                    alt="emotion-production"
                                    title="emotion-production"
                                    height="70"
                                    width="278"
                                />

                            </Link>
                        </div>
                        <div className="block md:hidden">
                            <Link to="/" scroll legacyBehavior>

                                <img src={logo} alt="logo" height="31" width="170" />

                            </Link>
                        </div>
                        <div className="hidden md:block w-3/5">
                            <ul className="flex items-center justify-center">
                                {NavbarData?.map((nav) => (
                                    <li key={nav.id} className="mx-5 relative">
                                        <NavLink
                                            to={nav.link}
                                            className={`navItem`}
                                            legacyBehavior>

                                            {nav.title}

                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="drawer-content block md:hidden">
                            <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
                                <span className="menu1"></span>
                                <span className="menu2"></span>
                                <span className="menu3"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="block md:hidden">
                <div
                    style={{ backgroundColor: "#828B9A" }}
                    className={`offcanvas offcanvas-end zIndex`}
                    tabIndex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                >
                    
                    <div className="offcanvas-header">
                        <div className="ml-auto text-white">
                            <AiOutlineClose
                                size={24}
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                    </div>
                    <div className="mx-auto">
                        <Link to="/" scroll legacyBehavior>

                            <img
                                src={logo}
                                height={100}
                                width={150}
                                alt="loading..."
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />

                        </Link>
                    </div>
                    <div className="offcanvas-body">
                        <div className="text-center">
                            {NavbarData?.map((nav) => (
                                <div
                                    key={nav.id}
                                    className={`navItemMobileHover my-2 py-2`}
                                >
                                    <NavLink to={nav.link} passHref legacyBehavior>
                                        <span
                                            className={`cursor-pointer`}
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        >
                                            <a href={nav.link} className="navItemMobile">{nav.title}</a>
                                        </span>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
        </nav>
    );
};

export default Navbar;
