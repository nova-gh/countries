import Navbar from "../components/Navbar";
import { ThemeContext } from "../helper/Context";
import { useState } from "react";
const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`min-h-screen min-w-full ${
          darkMode == false
            ? "text-white bg-[#1F2C35]"
            : "text-gray-900 bg-white"
        }`}
      >
        <Navbar />
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
