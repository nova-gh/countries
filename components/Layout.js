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
            ? "text-white bg-[#1F2C35] ease-in-out duration-1000"
            : "text-gray-900 bg-white ease-in-out duration-1000"
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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <title>Countries facts and details</title>
        </Head>
        <Navbar />
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
