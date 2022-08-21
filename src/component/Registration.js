/** @format */

import React from "react";
import Address from "./Address";
import OtherDetails from "./OtherDetails";
import "../form.css"

const Registration = () => {
 
  return (
    <div className="main_container">
   
        <form>
        <div>
          <h6>Person Details</h6>
          <div>
            <label htmlFor="name">Name</label>
            <input
            className="input_1"
              type="name"
              id="name"
              nammxxxyy="name"
              autoComplete="false"
              value=""
            />
          
            <label htmlFor="date">Date of Birth or age</label>
            <input
            className="input_1"
              type="date"
              id="date"
              nammxxxyy="dob"
              autoComplete="false"
              value=""
            />
        <label htmlFor="gender">sex</label>
            <select id="gender">
              <option selected> Select Gender</option>
              <option value="Other">Other</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input
              type="number"
              id="mobile"
              nammxxxyy="mobile"
              autoComplete="false"
              value=""
            />
          </div>
         <div>
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
          </div>
       </div>
       </div>

          <h6>Contact details</h6>
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
            className="input_2"
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
            <Address/>
            </div>
           
            <h6>Other details</h6>
            <OtherDetails/>
          </div>
        </form>
      
    </div>
  );
};

export default Registration;
