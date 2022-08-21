/** @format */

import React from "react";
import Address from "./Address";
import OtherDetails from "./OtherDetails";
import "../form.css";

const Registration = () => {
  return (
    <div className="main_container">
      <form>
        <div className="person_details">
          <h3 style={{textDecoration:"underline"}}>Person Details</h3>
          <div className="person_name_part1">
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
                className="input_1"
                type="date"
                id="date"
                nammxxxyy="dob"
                autoComplete="false"
                value=""
              />
            </span>
            <span className="span_margin">
              <label htmlFor="gender">sex</label>
              <select id="gender">
                <option selected> Select Gender</option>
                <option value="Other">Other</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </span>
          </div>
          <div className="person_name_part2">
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

        <h3 style={{textDecoration:"underline"}}>Contact details</h3>
        <div>
          <label htmlFor="guardian">Guardian Detail</label>
          <select className="input_1" name="guardian" id="guardian">
            <option selected> Relation of Guardian</option>
            <option value="mother">Mother</option>
            <option value="Father">Father</option>
            <option value="brother">Brother</option>
          </select>
          <input name="guardian-name" type="text" value="" />

          <label htmlFor="email">Email</label>
          <input
            className="input_1 "
            type="email"
            id="email"
            nammxxxyy="email"
            autoComplete="false"
            value=""
          />

          <label htmlFor="emargency">Emargency Contact Number</label>
          <input
            type="number"
            id="emargency"
            nammxxxyy="emargency_contact_number"
            autoComplete="false"
            value=""
          />
          <div>
            <Address />
          </div>

          <h3 style={{textDecoration:"underline"}}>Other details</h3>
          <OtherDetails />
        </div>
      </form>
    </div>
  );
};

export default Registration;
