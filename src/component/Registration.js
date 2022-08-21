/** @format */

import React from "react";
import Address from "./Address";

const Registration = () => {
 
  return (
    <div>
      <div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              nammxxxyy="name"
              autoComplete="false"
              value=""
            />
          
            <label htmlFor="date">Date of Birth or age</label>
            <input
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
            <label htmlFor="mobile">Mobile</label>
            <input
              type="number"
              id="mobile"
              nammxxxyy="mobile"
              autoComplete="false"
              value=""
            />
         
            <label id="govt-id">Govt issue Id</label>
            <select>
              <option selected> Select Id</option>
              <option value="Other">Other</option>
              <option value="Adhar">Adhar</option>
              <option value="Driving Licence">Driving Licence</option>
              <option value="pan">PAN</option>
            </select>
            <input
              type="text"
              nammxxxyy="id-value"
              autoComplete="false"
              value=""
            />
       </div>

          <h6>Contact details</h6>
          <div>
            <label htmlFor="guardian">Guardian Detail</label>
            <select>
              <option selected> Relation of Guardian</option>
              <option value="mother">Mother</option>
              <option value="Father">Father</option>
              <option value="brother">Brother</option>
            </select>
            <input name="guardian-name" type="text" value="" />
      
            <label htmlFor="email">Email</label>
            <input
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
