/** @format */


import React, { useState } from "react";
import Address from "./Address";
import OtherDetails from "./OtherDetails";
import "../form.css";
import { useFormik } from "formik";
import { signUpSchema} from "../schemas/Schema.js"
import Table from './Table';


const initialValues = {
  name:"",
  dob:"",
  gender:"",
  mobile:"",
  govtId:"",
  idValue:"",
  guardian:"",
  guardianName:"",
  email:"",
  emargencyContactNumber:"",
  address:"",
  state:"",
  city:"",
  country:"",
  pincode:"",
  occupation:"",
  maritalStatus:"",
  bloodGroup:"",
  nationality:"",
  religion:""


}



const Registration = () => {

  const [tableValue , setTableValue] = useState([])

 const {errors ,handleBlur,handleChange,touched,values,handleSubmit}= useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit : (values , action)=>{
      console.log(values);
      setTableValue((prev=>{
       
        return  [...prev ,values]
        console.log(tableValue);
      }))
      action.resetForm();
    }
  })
   

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="main_container  container-fluid">
        <div className="person_details mt-3 sm-1">
          <h5 style={{ textDecoration: "underline" }}>Person Details</h5>
          <div >
            <span className=" col-sm-4 span_margin">
          { errors.name&& touched.name?<p className="error">{errors.name}</p>:null}
              <label htmlFor="name">Name</label>
              <input
                className="input_1"
                type="name"
                id="name"
                name="name"
                autoComplete="false"
                value={values.name}
                placeholder="enter name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
             
            </span>
            <span className=" col-sm-4 span_margin">
            { errors.dob&& touched.dob?<p className="error">{errors.dob}</p>:null}
              <label htmlFor="date">Date of Birth or age</label>
              <input
                className="input_3"
                type="date"
                id="date"
                name="dob"
                autoComplete="false"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                
              />
            </span>
            <span className=" col-sm-4 span_margin">
            { errors.gender&& touched.gender?<p className="error">{errors.gender}</p>:null}
              <label htmlFor="gender">sex</label>
              <select name="gender" className="input_3" id="gender" onChange={handleChange}>
                <option selected> Select Gender</option>
                <option value="Other">Other</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </span>
          </div>
          <div >
            <span className=" col-sm-4 span_margin">
            { errors.mobile&& touched.mobile?<p className="error">{errors.mobile}</p>:null}
              <label htmlFor="mobile">Mobile</label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                autoComplete="false"
                placeholder=" contact number"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </span>
            <span className=" col-sm-4 span_margin">
            { errors.govtId && touched.govtId?<p className="error">{errors.govtId }</p>:null}
              <label id="govt-id">Govt issue Id</label>
              <select  name="govtId" id="govt-id"  onChange={handleChange}>
                <option selected> Select Id</option>
                <option value="Other">Other</option>
                <option value="Adhar">Adhar</option>
                <option value="Driving Licence">Driving Licence</option>
                <option value="pan">PAN</option>
              </select>
              {/* {<p>{errors.idValue}</p>} */}
              <input
                className="input_1"
                type="text"
                name="idValue"
                autoComplete="false"
                value={values.idValue}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=" type of Id"
              />
            </span>
          </div>
        </div>

        <div >
          
            <div  className="person_details">
        <h5 style={{ textDecoration: "underline" }}>Contact details</h5>
            <div>
              <span className=" col-sm-4 span_margin">
              { errors.guardian&& touched.guardian?<p className="error">{errors.guardian}</p>:null}
               {/* <label htmlFor="guardian">Guardian Detail</label> */}
              <select className="input_3" name="guardian" id="guardian" onChange={handleChange}>
                <option > Guardian</option>
                <option value="mother">Mother</option>
                <option value="Father">Father</option>
                <option value="brother">Brother</option>
              </select>
              { errors.guardianName && touched.guardianName ?<p className="error">{errors.guardianName }</p>:null}
              <input
                className="input_4"
                name="guardianName"
                placeholder="enter guardian name"
                type="text"
                value={values.guardianName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              </span>

              <span className=" col-sm-4 span_margin"> <label htmlFor="email">Email</label>
              { errors.email && touched.email ?<p className="error">{errors.email }</p>:null}
              <input
                className="input_4"
                type="email"
                id="email"
                name="email"
                autoComplete="false"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="abc@gmail.com"
              />
              </span>

              <span>
              { errors.emargencyContactNumber && touched.emargencyContactNumber ?<p className="error">{errors.emargencyContactNumber }</p>:null}
               <label htmlFor="emargency">Emargency Contact Number</label>
              <input
                className="input_3"
                type="number"
                id="emargency"
                name="emargencyContactNumber"
                autoComplete="false"
                value={values.emargencyContactNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="emergency number"
              />
              </span>
              </div>
            </div>
         

          <div>
            <Address  pass={handleBlur } passChange={handleChange} passValue={values} err={errors} passTouch={touched} />
          </div>
<div>
          <OtherDetails pass={handleBlur } passChange={handleChange} passValue={values} err={errors} passTouch={touched} />
          </div>
        </div>
        <div>

        <button type="submit" className="person_details btn btn-sm bg-success " style={{height:"30px" , width:"80px" , color:"white" , marginLeft:"1000px" ,padding:"20px"}}>Submit</button>
        </div>

    </div>
      </form>
      <Table passValue={tableValue}/>
      </>
  );
};

export default Registration;
