import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import "./Styles.css";

const countryList = [
  {
    name: "Singapore",
    code: "SG",
    cities: [
      "Ang Mo Kio New Town",
      "Ayer Raja New Town",
      "Bedok New Town",
      "Boon Lay",
      "Bukit Batok New Town",
      "Bukit Panjang New Town",
      "Bukit Timah",
      "Bukit Timah Estate",
      "Changi Village",
      "Choa Chu Kang New Town",
      "Clementi New Town",
      "Holland Village",
      "Hougang",
      "Jurong East New Town",
      "Jurong Town",
      "Jurong West New Town",
      "Kalang",
      "Kampong Pasir Ris",
      "Kembangan",
      "Pandan Valley",
      "Pasir Panjang",
      "Punggol",
      "Queenstown Estate",
      "Serangoon",
      "Simei New Town",
      "Singapore",
      "Tai Seng",
      "Tampines New Town",
      "Tanglin Halt",
      "Tanjong Pagar",
      "Toa Payoh New Town",
      "Woodlands New Town",
      "Yew Tee",
      "Yishun New Town"
    ]
  },
  {
    name: "Bahrain",
    code: "BH",
    cities: [
      "Al Budayyi`",
      "Al Hadd",
      "Al Hamalah",
      "Al Janabiyah",
      "Al Markh",
      "Al Muharraq",
      "Bani Jamrah",
      "Barbar",
      "Jurdab",
      "Madinat `Isa",
      "Madinat Hamad",
      "Manama",
      "Oil City",
      "Sanabis",
      "Sanad",
      "Sitrah",
      "Tubli"
    ]
  }
];
const CountrySel=()=> {
    const [fromCountires, setFromCountries] = useState("");
    const [fromCities, setFromCities] = useState([]);
  
    const handleFromCountries = (e) => {
      const country = countryList.find(
        (country) => country.name === e.target.value
      );
      setFromCountries(country.name);
      setFromCities(country.cities);
    };
    return (
      <Form.Group controlId="custom-select">
        <Form.Label>Select Country</Form.Label>
        <Form.Control
          as="select"
          className="rounded-0 shadow"
          onChange={(e) => handleFromCountries(e)}
        >
          <option className="d-none" value="">
            Select Country
          </option>
          {countryList.map((country, key) => (
            <option key={key} title={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </Form.Control>
        <Form.Label>Select City</Form.Label>
        <Form.Control as="select" className="rounded-0 shadow">
          <option className="d-none" value="">
            Select City
          </option>
          {fromCities.map((city, key) => (
            <option key={key} title="" value={city}>
              {city}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    );
  }
  
  export default CountrySel;

//   import "./styles.css";
// import * as React from "react";

// const data = {
//   countries: [
//     {
//       name: "Germany",
//       states: [
//         {
//           name: "A",
//           cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
//         }
//       ]
//     },
//     { name: "Spain", states: [{ name: "B", cities: ["Barcelona"] }] },

//     { name: "USA", states: [{ name: "C", cities: ["Downers Grove"] }] },
//     {
//       name: "Mexico",
//       states: [{ name: ["D", "F", "H"], cities: ["Puebla"] }]
//     },
//     {
//       name: "India",
//       states: [
//         { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] }
//       ]
//     }
//   ]
// };
// export default function App() {
//   const [selectedCountry, setSelectedCountry] = React.useState();
//   const [selectedState, setSelectedState] = React.useState();
//   const [selectedCity, setSelectedCity] = React.useState();

//   const availableState = data.countries.find((c) => c.name === selectedCountry);
//   const availableCities = availableState?.states?.find(
//     (s) => s.name === selectedState
//   );

//   return (
//     <div id="container">
//       <h2>Cascading or Dependent Dropdown using React</h2>

//       <div>
//         <label>Country</label>
//         <select
//           placeholder="Country"
//           value={selectedCountry}
//           onChange={(e) => setSelectedCountry(e.target.value)}
//         >
//           <option>--Choose Country--</option>
//           {data.countries.map((value, key) => {
//             return (
//               <option value={value.name} key={key}>
//                 {value.name}
//               </option>
//             );
//           })}
//         </select>
//       </div>

//       <div>
//         <label>State</label>
//         <select
//           placeholder="State"
//           value={selectedState}
//           onChange={(e) => setSelectedState(e.target.value)}
//         >
//           <option>--Choose State--</option>
//           {availableState?.states.map((e, key) => {
//             return (
//               <option value={e.name} key={key}>
//                 {e.name}
//               </option>
//             );
//           })}
//         </select>
//       </div>

//       <div>
//         <label>City</label>
//         <select
//           placeholder="City"
//           value={selectedCity}
//           onChange={(e) => setSelectedCity(e.target.value)}
//         >
//           <option>--Choose City--</option>
//           {availableCities?.cities.map((e, key) => {
//             return (
//               <option value={e.name} key={key}>
//                 {e}
//               </option>
//             );
//           })}
//         </select>
//       </div>
//     </div>
//   );
// }
