import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ThemeContext } from "../../helper/Context";
import { BiArrowBack } from "react-icons/bi";
import TextDetails from "../../components/detailsView/textDetails";
const Country = ({ country }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const flagImg = country.flags.png;
  const countryName = country.name.common;
  const countryNativeName = country.name.n;
  const pop = parseInt(country.population);
  const region = country.region;
  const subRegion = country.subregion;
  const capital = country.capital;
  const topLevelDomain = country.tld;
  const currencyObj = country.currencies;
  const currencyName = currencyObj[Object.keys(currencyObj)[0]].name;
  const currencySymbol = currencyObj[Object.keys(currencyObj)[0]].symbol;
  const langObj = country.languages;
  const langs = Object.values(langObj);
  // Using Intl API to convert country code to full name
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });
  const borderCountries = country.borders.map(
    (el) => (el = regionNamesInEnglish.of(el.substring(0, 2).toUpperCase()))
  );

  const population = pop.toLocaleString("en-US").toString();
  // router
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{countryName} | Detail</title>
      </Head>
      <div className="container p-6 mx-auto text-base ">
        <button
          onClick={() => router.back()}
          className={`flex items-center px-8 py-2 shadow-lg rounded-sm ${
            darkMode == false
              ? "bg-[#2A3642] text-white"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          <BiArrowBack className="mr-2 text-xl" /> Back
        </button>
        <main className="flex flex-col mt-10 lg:space-x-10 lg:mt-32 lg:flex-row ">
          <div className="flex-1 ">
            <div className="">
              <Image
                src={flagImg}
                // layout="fill"
                alt={countryName}
                layout="responsive"
                width={700}
                height={475}
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 w-1/2 ">
            <h1 className="mt-10 text-xl font-extrabold lg:mt-8">
              {countryName}
            </h1>
            <div
              className={`grid grid-rows-2  ${
                darkMode == false ? " text-white" : " text-gray-900"
              }`}
            >
              <div className="mt-8 space-y-2 ">
                <h1 className="font-semibold">
                  Population: <span className="font-light">{population}</span>
                </h1>
                <h1 className="font-semibold">
                  Region: <span className="font-light">{region}</span>
                </h1>
                <h1 className="font-semibold">
                  Sub Region: <span className="font-light">{subRegion}</span>
                </h1>
                <h1 className="font-semibold">
                  Capital: <span className="font-light">{capital}</span>
                </h1>
              </div>

              <div className="mt-10 space-y-2 ">
                <h1 className="font-semibold">
                  Top Level Domain:{" "}
                  <span className="font-light">{topLevelDomain}</span>
                </h1>
                <h1 className="font-semibold">
                  Currency: <span className="font-light"> {currencyName}</span>
                </h1>
                <h1 className="font-semibold">
                  Languages:
                  {langs.map((lang, i) => (
                    <span key={i} className="ml-1 font-light">
                      {lang}
                    </span>
                  ))}
                </h1>
              </div>
              {/* <div className="flex flex-col w-full col-span-3 mt-8 lg:items-center lg:flex-row">
                <h1 className="font-semibold">Border Countries </h1>
                <div className="flex items-center space-x-2 lg:ml-2">
                  {borderCountries.map((border, i) => (
                    <h1
                      key={i}
                      className={`px-8 py-2 rounded-sm shadow-lg ${
                        darkMode == false
                          ? "bg-[#2A3642] text-white"
                          : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      {border}
                    </h1>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Country;

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  const paths = countries.map((country) => ({
    params: { cca: country.cca2.toLowerCase() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.cca}`);
  const country = await res.json();

  return {
    props: {
      country: country[0],
    },
  };
};
