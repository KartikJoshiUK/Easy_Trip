

import { useContext } from "react";
import { ThemeContext } from "../GuideRestration";
export const SignupGuide = () => {
 const {formik}=useContext(ThemeContext)
  return (<>
    <h2 className="text-2xl font-bold mb-4 ml-[120px]">Sign Up</h2>
      <form className='ml-[120px]' onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-1">Email</label>
          <input 
          type="email" 
          id="email" 
          name="email"
           className="w-[400px] border border-gray-300 rounded px-3 py-2" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.email} />
            {
               formik.touched.email && formik.errors.email?<div className="text-red-500">{formik.errors.email}</div>:null
              }
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-1">Password</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          onBlur={formik.handleBlur}
          className="w-[400px] border border-gray-300 rounded px-3 py-2"
           onChange={formik.handleChange} value={formik.values.password}  />
             {
               formik.touched.password && formik.errors.password?<div className="text-red-500">{formik.errors.password}</div>:null
              }
        </div>
        <div className="mb-4">
          <label htmlFor="confirmpassword" className="block text-gray-700 font-bold mb-1">ConfirmPassword</label>
          <input type="password" id="password"
           name="confirmpassword" 
          className="w-[400px] border border-gray-300 rounded px-3 py-2"  
          onBlur={formik.handleBlur}
          onChange={formik.handleChange} value={formik.values.confirmpassword}
          />
            {
               formik.touched.confirmpassword && formik.errors.confirmpassword?<div className="text-red-500">{formik.errors.confirmpassword}</div>:null
              }
        </div>
        <div>
          <button type="submit" className="bg-blue-500 w-[400px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
       
      </form>
      </>
  )
}

