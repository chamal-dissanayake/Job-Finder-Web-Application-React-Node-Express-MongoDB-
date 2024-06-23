import { useState } from "react";
import logo from "../../public/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handelMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a Search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a Job" },
  ];
  return (
    <header className=" max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className=" flex justify-between items-center py-6">
        <a
          href="/"
          className=" flex items-center gap-2 text-2xl text-black font-semibold"
        >
          <img src={logo} alt="logo" className=" w-28 h-28 rounded-full" />
          <span>Job Finder</span>
        </a>
        {/* navItems for large devices */}
        <ul className=" hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className=" text-base text-black">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* sign up and login button */}
        <div className=" text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link className=" py-2 px-5 border rounded" to="/login">
            Log in
          </Link>
          <Link
            className=" py-2 px-5 border rounded bg-blue text-white"
            to="/sign-up"
          >
            Sign up
          </Link>
        </div>

        {/* mobile menu */}
        <div className=" md:hidden block ">
          <button onClick={handelMenuToggle}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className=" w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* navBar For mobile */}
      <div
        className={`px-4 bg-slate-700 py-5 rounded-sm md:hidden ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className=" text-base text-white first:text-white py-1 font-semibold"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className=" text-white py-1">
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
