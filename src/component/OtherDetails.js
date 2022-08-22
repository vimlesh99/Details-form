/** @format */

import React from "react";
import "../form.css";

const OtherDetails = () => {
  return (
    <div className="person_details">
    <h3 style={{ textDecoration: "underline" }}>Other details</h3>
      <div className="style_div">
       <span className="span_margin">
          <label htmlFor="occupation">Occupation</label>
          <input id="occupation" name="occupation" value="" />
        </span>
       <span className="span_margin">
          <label htmlFor="=religion">Religion</label>
          <select
            id="religion"
            name="religion"
            placeholder="select the religion"
          >
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="christian">Chrisaion</option>
            <option value="sikhs">Sikhs</option>
            <option value="jain">Jain</option>
          </select>
        </span>
       <span className="span_margin">
          <label htmlFor="marital_status">Marital Status</label>
          <select id="marital_status" name="marital_status">
            <option selected>select marital status</option>
            <option value="unmarried">Unmarried</option>
            <option value="married">Married</option>
          </select>
        </span>
      </div>

      <div className="style_div">
       <span className="span_margin">
          <label id="blood_group">Blood Group</label>
          <select id="blood_group" name="blood_group">
            <option selected>blood group</option>
            <option value="A">A</option>
            <option value="A+">A+</option>
            <option value="O">O</option>
          </select>
        </span>
       <span className="span_margin">
          <label id="nationality">Nationality</label>
          <select name="nationality" id="nationality">
            <option value="Indian" selected>
              Indian
            </option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default OtherDetails;
