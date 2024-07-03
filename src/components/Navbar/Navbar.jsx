import { HiArrowUpRight } from "react-icons/hi2";
import logo from "../../assets/Media/logo dark.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
            <a href="/">
                <img src={logo} alt="" />
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-xl font-semibold">Home</a>
            </li>
            <li>
              <a className="text-xl font-semibold">Service</a>
            </li>
            <li>
              <a className="text-xl font-semibold">Blog</a>
            </li>
            <li>
              <a className="text-xl font-semibold">About US</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn px-8 rounded-xl btn-outline">Appointment <span><HiArrowUpRight className="text-lg font-bold" /></span> </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
