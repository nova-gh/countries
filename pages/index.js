import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import { BiSearch } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../helper/Context";

export default function Home({ data }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [selectRegion, setSelectRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    setFilteredCountries(
      data.filter((country) => {
        let countryName = country.name.common.toLowerCase();
        let countryRegion = country.region.toLowerCase();
        return (
          countryName.includes(search.toLowerCase()) &&
          countryRegion.includes(selectRegion.toLowerCase())
        );
      })
    );
  }, [search, data, selectRegion]);

  const country = filteredCountries.map((country, i) => (
    <CountryCard
      key={i}
      flagImg={country.flags.png}
      countryName={country.name.common}
      pop={country.population}
      region={country.region}
      capital={country.capital}
      cca={country.cca2}
    />
  ));
  return (
    <div className="container min-h-screen mx-auto">
      <main className="mt-6 lg:px-4 xl:px-0">
        <section className="flex flex-col m-6 space-y-4 md:flex-row lg:m-0 md:space-y-0">
          <div
            className={`flex w-full md:w-2/5 items-center py-4 px-2 rounded-lg  ${
              darkMode == false
                ? "bg-[#2A3642] text-white"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            <BiSearch className="ml-2 text-xl" />
            <input
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="w-full ml-4 bg-transparent focus:outline-none"
              placeholder="Search for a country..."
            />
          </div>
          <div
            className={`md:ml-auto w-1/2 md:w-[15%] py-4 px-2 rounded-lg flex items-center ${
              darkMode == false
                ? "bg-[#2A3642] text-white"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            <select
              onChange={(e) => {
                setSelectRegion(e.target.value);
              }}
              className={`w-full md:text-center appearance-none focus:outline-none ${
                darkMode == false
                  ? "bg-[#2A3642] text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              <option className="" value="">
                All Region
              </option>
              <option className="" value="Africa">
                Africa
              </option>
              <option className="" value="America">
                America
              </option>
              <option className="" value="Asia">
                Asia
              </option>
              <option className="" value="Eurpoe">
                Eurpoe
              </option>
              <option className="" value="Oceania">
                Oceania
              </option>
            </select>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {data.length > 0 ? country : <h1>Loading</h1>}
        </section>
      </main>
    </div>
  );
}
export const getStaticProps = async (ctx) => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
