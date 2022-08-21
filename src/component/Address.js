/** @format */

import { Country, State, City } from "country-state-city/lib/cjs";
import { useState } from "react";

const Address = () => {

  console.log(City.getCitiesOfState("IN", "DL"));

  const [data, setData] = useState("IN");
  console.log(data);

  const getCountryCode = (event) => {
    console.log(event.target.value);
    let value = event.target.value;
    let myData = Country.getAllCountries();
    console.log(myData);
    let countryCode =myData.filter((elm) => {
      if (elm.name === value) {
         return elm.isoCode;
      }else{
             return "IN"
      }
    });
    let code = countryCode[0].isoCode;
    setData(code);
  };

  return (
    <div>
      <h6>Address</h6>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          nammxxxyy="address"
          autoComplete="false"
          value=""
        />

        <label htmlFor="state">State</label>
        <select name="state" id="state" class="form-control">
        <option selected>select the state</option>
          {State.getStatesOfCountry(data).map((elm) => (
            <option value="Andaman and Nicobar Islands">{elm.name}</option>
          ))}
        </select>

        <label htmlFor="city">City</label>
        <select name="city" id="city">
          {City.getCitiesOfState("IN", "DL").map((elm) => {
           return <option key={elm.isoCode} value={elm.name} id={elm.isoCode}>
              {elm.name}
            </option>;
          })}
        </select>

        <label htmlFor="country">Country</label>
        <select name="country" id="country" onChange={getCountryCode}>
          <option value="india" selected>
            India
          </option>
          {Country.getAllCountries().map((elm) => {
            return (
              <>
                <option key={elm.isoCode} value={elm.name} id={elm.isoCode}>
                  {elm.name}
                </option>
              </>
            );
          })}
        </select>

        <label htmlFor="pincode">Pincode</label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          placeholder="enter the pincode"
          autoComplete="false"
          value=""
        />
      </div>
    </div>
  );
};

export default Address;
