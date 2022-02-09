// import { useContext } from "react";
// import { ThemeContext } from "../../helper/Context";
// const TextDetails = ({
//   countryName,
//   pop,
//   region,
//   subRegion,
//   capital,
//   topLevelDomain,
//   currencyName,
//   langs,
//   borderCountries,
// }) => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const population = pop.toLocaleString("en-US").toString();
//   {
//     /* <TextDetails
//   countryName={countryName}
//   pop={pop}
//   region={region}
//   subRegion={subRegion}
//   capital={capital}
//   topLevelDomain={topLevelDomain}
//   currencyName={currencyName}
//   langs={langs}
//   borderCountries={borderCountries}
// /> */
//   }
//   return (
//     <>
//       <div
//         className={`mt-10 ${
//           darkMode == false ? " text-white" : " text-gray-900"
//         }`}
//       >
//         <h1 className="text-xl font-extrabold">{countryName}</h1>
//         <div className="mt-8 space-y-2">
//           <h1 className="font-semibold">
//             Population: <span className="font-light">{population}</span>
//           </h1>
//           <h1 className="font-semibold">
//             Region: <span className="font-light">{region}</span>
//           </h1>
//           <h1 className="font-semibold">
//             Sub Region: <span className="font-light">{subRegion}</span>
//           </h1>
//           <h1 className="font-semibold">
//             Capital: <span className="font-light">{capital}</span>
//           </h1>
//         </div>
//       </div>
//       <div className="mt-10 space-y-2 ">
//         <h1 className="font-semibold">
//           Top Level Domain: <span className="font-light">{topLevelDomain}</span>
//         </h1>
//         <h1 className="font-semibold">
//           Currency: <span className="font-light"> {currencyName}</span>
//         </h1>
//         <h1 className="font-semibold">
//           Languages:
//           {langs.map((lang, i) => (
//             <span key={i} className="ml-1 font-light">
//               {lang}
//             </span>
//           ))}
//         </h1>
//       </div>
//       <div className="mt-8 ">
//         <h1 className="font-semibold">Border Countries </h1>
//         <div className="flex space-x-2">
//           {borderCountries.map((border, i) => (
//             <h1
//               key={i}
//               className={`px-8 py-2 rounded-sm shadow-lg ${
//                 darkMode == false
//                   ? "bg-[#2A3642] text-white"
//                   : "bg-gray-200 text-gray-900"
//               }`}
//             >
//               {border}
//             </h1>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default TextDetails;
