import { useContext } from "react";
import { ThemeContext } from "../helper/Context";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`w-full mx-auto px-4 ${
        darkMode == false
          ? "bg-[#2A3642] text-white"
          : "bg-gray-200 text-gray-900"
      }`}
    >
      <nav className="container flex items-center justify-between px-4 py-6 mx-auto lg:px-0">
        <div className="flex items-center ">
          <FcGlobe className="text-2xl" />
          <h1 className="select-none">Countries</h1>
        </div>
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode == false ? (
            <MdOutlineLightMode className="text-lg" />
          ) : (
            <MdOutlineDarkMode className="text-lg" />
          )}
          <h2 className="select-none">Mode</h2>
          {/* <button onClick={() => setDarkMode(!darkMode)}>Mode</button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
