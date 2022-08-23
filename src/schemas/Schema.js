import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name:Yup.string().min(3).max(25).required("please enter your name"),
    dob:Yup.string().required("date of birth not mention"),
    gender:Yup.string().required("select the gender"),
    mobile:Yup.string().min(10).max(12).required("enter mobile number"),
    govtId:Yup.string().required("select Id"),
    idValue:Yup.string().required("enter the type of id"),
    guardian:Yup.string().required("select guardian"),
    guardianName:Yup.string().min(5).max(15).required("name of guardian"),
    email:Yup.string().email().required("enter the gmail"),
    emargencyContactNumber:Yup.string().min(10).required("emergency number"),
    address:Yup.string().min(3).required("enter address"),
    state:Yup.string().required("select state"),
    city:Yup.string().required("select city"),
    // country:Yup.string().required("select country"),
    pincode:Yup.string().required("enter pincode"),
    occupation:Yup.string().required("enter occupation"),
    maritalStatus:Yup.string().required("select marital"),
    bloodGroup:Yup.string().required("select"),
    religion:Yup.string().required("select religion")
}) 