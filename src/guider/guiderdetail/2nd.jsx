// import { useformik2 } from "formik2";
import { ThemeContext } from "../GuideRestration";
import { useContext } from "react";
// import * as Yup from "yup"



const RegistrationForm = () => {
const {formik2,initialvalue} =useContext(ThemeContext);
console.log(initialvalue,formik2.values)
  
  console.log(formik2.errors)

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
                onBlur={formik2.handleBlur}
                onChange={formik2.handleChange} 
                value={formik2.values.name}
                required
              />
              {
               formik2.touched.name && formik2  .errors.name?<div className="text-red-500">{formik2.errors.name}</div>:null
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
                  onChange={formik2.handleChange} 
                  onBlur={formik2.handleBlur}
                 value={formik2.values.phone}
                required
              />
                {
               formik2.touched.phone && formik2.errors.name?<div className="text-red-500">{formik2.errors.name}</div>:null
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
                onChange={formik2.handleChange} 
                onBlur={formik2.handleBlur}
                value={formik2.values.state}
                required
              />
                {
               formik2.touched.state && formik2.errors.name?<div className="text-red-500">{formik2.errors.name}</div>:null
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
                onChange={formik2.handleChange} 
                onBlur={formik2.handleBlur}
                value={formik2.values.City}
                required
              />
                {
               formik2.touched.city && formik2.errors.name?<div className="text-red-500">{formik2.errors.name}</div>:null
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
                 onChange={formik2.handleChange} 
                 onBlur={formik2.handleBlur}
          value={formik2.values.dob}
                required
              />
                {
               formik2.touched.dob && formik2.errors.name?<div className="text-red-500">{formik2.errors.name}</div>:null
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
                 onChange={formik2.handleChange} 
                 onBlur={formik2.handleBlur}
          value={formik2.values.language}
                required
              />
                {
               formik2.touched.language && formik2.errors.name?<div className="text-red-500">{formik2.errors.name}</div>:null
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
                onChange={formik2.handleChange} 
                onBlur={formik2.handleBlur}
                value={formik2.values.gender}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {
               formik2.touched.gender && formik2.errors.name?<div className="text-red-500">{formik2.errors.name}</div>:null
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
                onChange={formik2.handleChange} 
                value={formik2.values.qualification}
                onBlur={formik2.handleBlur}
                required
              />
                {
               formik2.touched.gender && formik2.errors.gender?<div className="text-red-500">{formik2.errors.gender}</div>:null
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
                onChange={formik2.handleChange} 
                value={formik2.values.address}
                onBlur={formik2.handleBlur}
                required
              ></textarea>
                {
               formik2.touched.address && formik2.errors.address?<div className="text-red-500">{formik2.errors.address}</div>:null
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
                onChange={formik2.handleChange} 
                value={formik2.values.portfolio}
                onBlur={formik2.handleBlur}
                required
              />
                {
               formik2.touched.portfolio && formik2.errors.portfolio?<div className="text-red-500">{formik2.errors.portfolio}</div>:null
              }
            </div>
         
            <div className="mb-4">
              <label htmlFor="experience" className="block font-bold mb-1">
                Experience
              </label>
              <textarea
                id="experience"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                onChange={formik2.handleChange} 
                onBlur={formik2.handleBlur}
                value={formik2.values.experience}
                name="experience" 
              />
                {
               formik2.touched.experience && formik2.errors.experience?<div className="text-red-500">{formik2.errors.experience}</div>:null
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
                onChange={formik2.handleChange} 
                onBlur={formik2.handleBlur}
                value={formik2.values.accountno}
                required
              />
                {
               formik2.touched.qualification && formik2.errors.qualification?<div className="text-red-500">{formik2.errors.qualification}</div>:null
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
                onChange={formik2.handleChange} 
                onBlur={formik2.handleBlur}
                value={formik2.values.ifsccode}
                
                required
              />
                {
               formik2.touched.ifsccode && formik2.errors.ifsccode?<div className="text-red-500">{formik2.errors.ifsccode}</div>:null
              }
            </div>
           
          
          </div>
        </div>
     
      </form>
    </div>
  );
};

export default RegistrationForm;
