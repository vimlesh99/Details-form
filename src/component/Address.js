/** @format */

import { Country, State, City } from "country-state-city/lib/cjs";
import { useState } from "react";
import "../form.css";

const Address = (props ) => {
  const {pass,passChange,passValue ,err , passTouch} =props;
  console.log(City.getCitiesOfState("IN", "DL"));

  const [data, setData] = useState("IN");
  console.log(data);






  const getCountryCode = (event) => {
    // console.log(event.target.value);
    let value = event.target.value;
    let myData = Country.getAllCountries();
        passChange(event);
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
      <h5 style={{ textDecoration: "underline" }}>Address</h5>
        <div  className="style_div">
          <span className=" col-sm-4 span_margin">
       { err.address && passTouch.address ? <p className="error">{err.address}</p>:null}
            <label htmlFor="address">Address</label>
            <input
              className="input_1"
              type="text"
              id="address"
              name="address"
              autoComplete="false"
              value={passValue.address}
              onBlur={pass}
              onChange={passChange}
              placeholder="enter permanent address"
            />
          </span>
          <span className=" col-sm-4 span_margin">
          { err.State && passTouch.State ? <p className="error">{err.State}</p>:null}
            <label htmlFor="state">State</label>
            <select name="state"  
              onChange={passChange} id="state" className="input_1">
              <option selected>select the state</option>
              {State.getStatesOfCountry(data).map((elm) => (
                <option value={elm.name}>{elm.name}</option>
              ))}
            </select>
          </span>
          <span className=" col-sm-4 span_margin">
          { err.City && passTouch.City ? <p className="error">{err.City}</p>:null}
            <label htmlFor="city">City</label>
            <select name="city"  onChange={passChange} id="city">
            <option selected>select the city</option>
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
          <span className=" col-sm-4 span_margin">
          { err.Country && passTouch.country ? <p className="error">{err.country}</p>:null}
            <label htmlFor="country">Country</label>
            <select name="country"  id="country" onChange={getCountryCode} >
             
              <option value="india" >
                India
              </option>
              {Country.getAllCountries(data).map((elm) => {
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
          <span className=" col-sm-4 span_margin">
          { err.pincode && passTouch.pincode ? <p className="error">{err.pincode}</p>:null}
            <label htmlFor="pincode">Pincode</label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              placeholder="enter the pincode"
              autoComplete="false"
              value={passValue.pincode}
              onBlur={pass}
              onChange={passChange}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Address;
