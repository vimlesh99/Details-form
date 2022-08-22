/** @format */

import React from "react";
import Address from "./Address";
import OtherDetails from "./OtherDetails";
import "../form.css";

const Registration = () => {
  return (
    <form>
    <div className="main_container">
        <div className="person_details">
          <h3 style={{ textDecoration: "underline" }}>Person Details</h3>
          <div >
            <span className="span_margin">
              <label htmlFor="name">Name</label>
              <input
                className="input_1"
                type="name"
                id="name"
                nammxxxyy="name"
                autoComplete="false"
                value=""
              />
            </span>
            <span className="span_margin">
              <label htmlFor="date">Date of Birth or age</label>
              <input
                className="input_3"
                type="date"
                id="date"
                nammxxxyy="dob"
                autoComplete="false"
                value=""
              />
            </span>
            <span className="span_margin">
              <label htmlFor="gender">sex</label>
              <select className="input_3" id="gender">
                <option selected> Select Gender</option>
                <option value="Other">Other</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </span>
          </div>
          <div >
            <span className="span_margin">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="number"
                id="mobile"
                nammxxxyy="mobile"
                autoComplete="false"
                value=""
              />
            </span>
            <span className="span_margin">
              <label id="govt-id">Govt issue Id</label>
              <select>
                <option selected> Select Id</option>
                <option value="Other">Other</option>
                <option value="Adhar">Adhar</option>
                <option value="Driving Licence">Driving Licence</option>
                <option value="pan">PAN</option>
              </select>
              <input
                className="input_1"
                type="text"
                nammxxxyy="id-value"
                autoComplete="false"
                value=""
              />
            </span>
          </div>
        </div>

        <div >
          
            <div  className="person_details">
        <h3 style={{ textDecoration: "underline" }}>Contact details</h3>
            <div>
              <span className="span_margin"> <label htmlFor="guardian">Guardian Detail</label>
              <select className="input_3" name="guardian" id="guardian">
                <option selected> Guardian</option>
                <option value="mother">Mother</option>
                <option value="Father">Father</option>
                <option value="brother">Brother</option>
              </select>
              <input
                className="input_4"
                name="guardian-name"
                placeholder="Relation of Guardian"
                type="text"
                value=""
              />
              </span>

              <span className="span_margin"> <label htmlFor="email">Email</label>
              <input
                className="input_4"
                type="email"
                id="email"
                nammxxxyy="email"
                autoComplete="false"
                value=""
              />
              </span>

              <span> <label htmlFor="emargency">Emargency Contact Number</label>
              <input
                className="input_3"
                type="number"
                id="emargency"
                nammxxxyy="emargency_contact_number"
                autoComplete="false"
                value=""
              />
              </span>
              </div>
            </div>
         

          <div>
            <Address />
          </div>
<div>
          <OtherDetails />
          </div>
        </div>
    </div>
      </form>
  );
};

export default Registration;
