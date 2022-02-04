import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../helper/Context";
import Link from "next/link";

const CountryCard = ({ flagImg, countryName, pop, capital, region, id }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    // <Link href={`/country/${cid}`} passHref>
    <div
      className={`flex flex-col m-6 lg:m-0 shadow-lg cursor-pointer
      ${
        darkMode == false
          ? "bg-[#2A3642] text-white"
          : "bg-gray-200 text-gray-900"
      }
    `}
    >
      <div className="h-40 ">
        <img src={flagImg} className="object-cover w-full h-full " />
      </div>
      <div className="flex flex-col items-start p-4 mt-4 text-sm">
        <h1 className="font-semibold ">{countryName}</h1>
        <div className="pt-4">
          <h2 className="">Population: {pop}</h2>
          <h2 className="">Region: {region}</h2>
          {capital === null ? "" : <h2 className="">Capital: {capital}</h2>}
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default CountryCard;
