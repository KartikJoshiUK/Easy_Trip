import { useFormik } from "formik";
import { ThemeContext } from "../GuideRestration";
import { useContext } from "react";
import * as Yup from "yup"



const RegistrationForm = () => {
const initialValues=useContext(ThemeContext);
  const formik=useFormik({
    initialValues,
    validationSchema:Yup.object({
      name:Yup.string().required("Required!"),
     
           phone:Yup.string()
           .min(10, 'Too Short!').max(10)
           .required('Required'),
           dob:Yup.string().required("Required!"),
           gender:Yup.string().required("Required!"),
          qualification:Yup.string().required("Required!"),
         address:Yup.string().required("Required!"),
        experience:Yup.string().required("Required!"),
        portfolio:Yup.string().required("Link Required!"),
        language:Yup.string().required("Required!"),
        accountno:Yup.string()
        .min(11, 'Too Short!').max(11)
        .required('Required'),
        ifsccode:Yup.string()
        .min(11, 'Too Short!').max(11)
        .required('Required!'),
        state:Yup.string().required("Required!"),
        city:Yup.string().required("Required!")
    })
    
  })
  console.log(formik.errors)

  return (
    <div className="flex items-center justify-center   h-full mb-[90px]">
      <form
        className="p-8 "
        style={{ width: "700px", height: "590px"}}
        
      >
        <h2 className="text-2xl mb-6">Registration Form</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange} 
                value={formik.values.name}
                required
              />
              {
               formik.touched.name && formik.errors.name?<div className="text-red-500">{formik.errors.name}</div>:null
              }
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-4">
              <label htmlFor="phone" className="block font-bold mb-1">
                Phone Number              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="border-gray-400 border-solid
                 border py-2 px-3 w-full rounded text-sm"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                 value={formik.values.phone}
                required
              />
                {
               formik.touched.phone && formik.errors.name?<div className="text-red-500">{formik.errors.name}</div>:null
              }
            </div>
          </div>
         
        </div>
        {/* Other form fields */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
          <div className="mb-4">
              <label htmlFor="qualification" className="block font-bold mb-1">
              State
              </label>
              <input
                type="text"
                id="qualification"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                name="state"
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.state}
                required
              />
                {
               formik.touched.state && formik.errors.name?<div className="text-red-500">{formik.errors.name}</div>:null
              }
            </div>
          <div className="mb-4">
              <label htmlFor="qualification" className="block font-bold mb-1">
                City
              </label>
              <input
                type="text"
                id="qualification"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                name="city"
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.City}
                required
              />
                {
               formik.touched.city && formik.errors.name?<div className="text-red-500">{formik.errors.name}</div>:null
              }
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block font-bold mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                 onChange={formik.handleChange} 
                 onBlur={formik.handleBlur}
          value={formik.values.dob}
                required
              />
                {
               formik.touched.dob && formik.errors.name?<div className="text-red-500">{formik.errors.name}</div>:null
              }
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block font-bold mb-1">
                language
              </label>
              <input
                type="text"
                id="language"
                name="language"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                 onChange={formik.handleChange} 
                 onBlur={formik.handleBlur}
          value={formik.values.language}
                required
              />
                {
               formik.touched.language && formik.errors.name?<div className="text-red-500">{formik.errors.name}</div>:null
              }
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block font-bold mb-1">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.gender}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {
               formik.touched.gender && formik.errors.name?<div className="text-red-500">{formik.errors.name}</div>:null
              }
            <div className="mb-4">
              <label htmlFor="qualification" className="block font-bold mb-1">
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                name="qualification"
                onChange={formik.handleChange} 
                value={formik.values.qualification}
                onBlur={formik.handleBlur}
                required
              />
                {
               formik.touched.gender && formik.errors.gender?<div className="text-red-500">{formik.errors.gender}</div>:null
              }
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-4">
              <label htmlFor="address" className="block font-bold mb-1">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                onChange={formik.handleChange} 
                value={formik.values.address}
                onBlur={formik.handleBlur}
                required
              ></textarea>
                {
               formik.touched.address && formik.errors.address?<div className="text-red-500">{formik.errors.address}</div>:null
              }
            </div>
            <div className="mb-4">
              <label htmlFor="portfolio" className="block font-bold mb-1">
                Portfolio/Cv Link
              </label>
              <input
                type="url"
                id="portfolio"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                name="portfolio"
                onChange={formik.handleChange} 
                value={formik.values.portfolio}
                onBlur={formik.handleBlur}
                required
              />
                {
               formik.touched.portfolio && formik.errors.portfolio?<div className="text-red-500">{formik.errors.portfolio}</div>:null
              }
            </div>
         
            <div className="mb-4">
              <label htmlFor="experience" className="block font-bold mb-1">
                Experience
              </label>
              <textarea
                id="experience"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.experience}
                name="experience" 
              />
                {
               formik.touched.experience && formik.errors.experience?<div className="text-red-500">{formik.errors.experience}</div>:null
              }
            </div>
          
            <div className="mb-4">
              <label htmlFor="qualification" className="block font-bold mb-1">
               Account-number
              </label>
              <input
                type="text"
                id="qualification"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                name="accountno"
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.accountno}
                required
              />
                {
               formik.touched.qualification && formik.errors.qualification?<div className="text-red-500">{formik.errors.qualification}</div>:null
              }
            </div>
             <div className="mb-4">
              <label htmlFor="qualification" className="block font-bold mb-1">
                Ifsc-code
              </label>
              <input
                type="text"
                id="qualification"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                name="ifsccode"
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.ifsccode}
                
                required
              />
                {
               formik.touched.ifsccode && formik.errors.ifsccode?<div className="text-red-500">{formik.errors.ifsccode}</div>:null
              }
            </div>
           
          
          </div>
        </div>
     
      </form>
    </div>
  );
};

export default RegistrationForm;
