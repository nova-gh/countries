import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../helper/Context";
import Link from "next/link";

const CountryCard = ({ flagImg, countryName, pop, capital, region, cca }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const population = pop.toLocaleString("en-US").toString();
  return (
    <Link href={`/${cca.toLowerCase()}`} passHref>
      <a>
        <div
          // className={`min-w-[320px] mx-auto rounded-md flex flex-col shadow-lg cursor-pointer
          className={`flex flex-col mt-6 mx-10 sm:mx-6  lg:m-0 shadow-lg cursor-pointer rounded-md
        ${
          darkMode == false
            ? "bg-[#2A3642] text-white"
            : "bg-gray-200 text-gray-900"
        }
    `}
        >
          <div className="relative w-full h-40 ">
            <Image
              src={flagImg}
              layout="fill"
              alt={countryName}
              className="rounded-t-md"
            />
          </div>
          <div className="flex flex-col items-start p-4 mt-4 text-sm">
            <h1 className="text-base font-extrabold">{countryName}</h1>
            <div className="pt-4 ">
              <h2 className="font-semibold">
                Population:
                <span className="font-light"> {population}</span>
              </h2>
              <h2 className="font-semibold">
                Region: <span className="font-light"> {region}</span>
              </h2>
              {capital === null ? (
                ""
              ) : (
                <h2 className="font-semibold">
                  Capital: <span className="font-light"> {capital}</span>
                </h2>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CountryCard;
