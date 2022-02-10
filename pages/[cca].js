import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ThemeContext } from "../helper/Context";
import { BiArrowBack } from "react-icons/bi";
import alphaCode from "i18n-iso-countries";
alphaCode.registerLocale(require("i18n-iso-countries/langs/en.json"));

// import TextDetails from "../../components/detailsView/textDetails";
const CountryMap = dynamic(
  () => import("../components/detailsView/CountryMap"),
  { ssr: false }
);
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
  const currencyObj = country?.currencies;
  const latLong = country.latlng;
  const currencyName =
    currencyObj !== undefined
      ? currencyObj?.[Object.keys(currencyObj)[0]].name
      : undefined;
  // const currencySymbol = currencyObj?.[Object.keys(currencyObj)[0]].symbol;
  const langObj = country?.languages;
  const langs = langObj !== undefined ? Object.values(langObj) : undefined;
  const borderCountries = country.borders?.map(
    (el) => (el = alphaCode.getName(`${el}`, "en"))
  );

  const population = pop.toLocaleString("en-US").toString();
  const router = useRouter();
  console.log(alphaCode.getName(`UNK`, "en"));

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
        <section className="flex flex-col mt-10 lg:space-x-10 lg:mt-32 lg:flex-row ">
          <div className="flex-1 lg:self-center">
            <div className="max-w-md mx-auto lg:mx-0 lg:max-w-full">
              <Image
                src={flagImg}
                // layout="fill"
                alt={countryName}
                className="rounded-xl"
                layout="responsive"
                width={700}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 ">
            <h1 className="mt-10 text-xl font-extrabold lg:mt-8">
              {countryName}
            </h1>
            <div
              className={`justify-between lg:mt-10 flex flex-col md:flex-row xl:space-x-0 ${
                darkMode == false ? " text-white" : " text-gray-900"
              }`}
            >
              <div className="mt-8 space-y-2 lg:mt-0">
                <h1 className="font-semibold">
                  Population: <span className="font-light">{population}</span>
                </h1>
                <h1 className="font-semibold">
                  Region: <span className="font-light">{region}</span>
                </h1>
                <h1
                  className={`font-semibold ${
                    subRegion === undefined && "hidden"
                  }`}
                >
                  Sub Region: <span className="font-light">{subRegion}</span>
                </h1>
                <h1
                  className={`font-semibold ${
                    capital === undefined && "hidden"
                  } `}
                >
                  Capital: <span className="font-light">{capital}</span>
                </h1>
              </div>

              <div className="mt-8 space-y-2 md:mr-14 lg:mr-0 lg:mt-0">
                <h1 className="font-semibold ">
                  Top Level Domain:{" "}
                  <span className="font-light">{topLevelDomain}</span>
                </h1>
                <h1
                  className={`font-semibold ${
                    currencyName === undefined || null ? "hidden" : "block"
                  }`}
                >
                  Currency: <span className="font-light"> {currencyName}</span>
                </h1>
                <h1
                  className={`font-semibold ${
                    langs === undefined || null ? "hidden" : "block"
                  }`}
                >
                  Languages:
                  {langs?.map((lang, i) => (
                    <span key={i} className="ml-1 font-light">
                      {lang}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
            <div
              className={`${
                borderCountries === undefined || null ? "hidden" : "flex"
              } flex flex-col w-full  mt-8 lg:flex-row`}
            >
              <h1 className="font-semibold md:self-center min-w-max">
                Border Countries{" "}
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-2 lg:ml-2 lg:mt-0 lg:items-center">
                {borderCountries?.map((border, i) =>
                  border !== undefined || null ? (
                    <h1
                      key={i}
                      className={`px-4 py-2 rounded-sm shadow-lg ${
                        darkMode == false
                          ? "bg-[#2A3642] text-white"
                          : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      {border === undefined || null ? " " : border}
                    </h1>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-10">
          <div className="bg-red-300 rounded-2xl">
            <CountryMap latLong={latLong} countryName={countryName} />
          </div>
        </section>
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
