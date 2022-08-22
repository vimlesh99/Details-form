/** @format */

import { Country, State, City } from "country-state-city/lib/cjs";
import { useState } from "react";
import "../form.css";

const Address = () => {
  console.log(City.getCitiesOfState("IN", "DL"));

  const [data, setData] = useState("IN");
  console.log(data);

  const getCountryCode = (event) => {
    console.log(event.target.value);
    let value = event.target.value;
    let myData = Country.getAllCountries();
    console.log(myData);
    let countryCode = myData.filter((elm) => {
      if (elm.name === value) {
        return elm.isoCode;
      } else {
        return "IN";
      }
    });
    let code = countryCode[0].isoCode;
    setData(code);
  };

  return (
    <>
      <div className="person_details">
      <h3 style={{ textDecoration: "underline" }}>Address</h3>
        <div  className="style_div">
          <span className="span_margin">
            <label htmlFor="address">Address</label>
            <input
              className="input_1"
              type="text"
              id="address"
              name="address"
              autoComplete="false"
              value=""
              placeholder="enter permanent address"
            />
          </span>
          <span className="span_margin">
            <label htmlFor="state">State</label>
            <select name="state" id="state" className="input_1">
              <option selected>select the state</option>
              {State.getStatesOfCountry(data).map((elm) => (
                <option value="Andaman and Nicobar Islands">{elm.name}</option>
              ))}
            </select>
          </span>
          <span className="span_margin">
            <label htmlFor="city">City</label>
            <select name="city" id="city">
              {City.getCitiesOfState("IN", "DL").map((elm) => {
                return (
                  <option key={elm.isoCode} value={elm.name} id={elm.isoCode}>
                    {elm.name}
                  </option>
                );
              })}
            </select>
          </span>
        </div>
        <div className="style_div">
          <span className="span_margin">
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
          </span>
          <span className="span_margin">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              placeholder="enter the pincode"
              autoComplete="false"
              value=""
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Address;
