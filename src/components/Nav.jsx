import { Outlet, Link } from "react-router-dom";
import fairweatherLogo from "../assets/fairweather-logo.svg";

const Navigation = () => {
  return (
    <>
      <nav className="flex px-6 h-[6rem] justify-between items-center fixed z-10 bg-white w-screen text-xl">
        <Link to="/">
          <img src={fairweatherLogo} className="w-24" />
        </Link>

        <div className="menu flex gap-6">
          <Link to="/shop">Shop</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
