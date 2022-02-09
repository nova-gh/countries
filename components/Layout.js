import Navbar from "../components/Navbar";
import { ThemeContext } from "../helper/Context";
import { useState } from "react";
import Head from "next/head";
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
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="View countries facts around the world"
          ></meta>
          <meta
            property="og:title"
            content="Countries facts and details"
            key="ogtitle"
          />
          <meta
            property="og:description"
            content="Learn about countries around the world and key facts about them."
            key="ogdesc"
          />
          <link rel="icon" href="/favicon.ico" />
          <title>Countries facts and details</title>
        </Head>
        <Navbar />
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
