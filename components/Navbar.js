import { useContext } from "react";
import { ThemeContext } from "../helper/Context";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`w-full bg-gray-300 mx-auto ${
        darkMode == false
          ? "bg-[#2A3642] text-white"
          : "bg-gray-200 text-gray-900"
      }`}
    >
      <nav className="container flex py-6 mx-auto justify-between">
        <div className="">
          {/* logo */}
          Countries
        </div>
        <div className="">
          <button onClick={() => setDarkMode(!darkMode)}>Mode</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
