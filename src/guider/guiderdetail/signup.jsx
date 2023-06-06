import { useFormik } from "formik"


export const SignupGuide = () => {
   const formik= useFormik({
    initialValues:{
        name:"",
        password:"",
        confirmpassword:""
    },
    onSubmit:values=>{
        console.log(values)
    },
    validate:values=>{
        let errors={}
        if(!values.name){
            errors.name="Required"
        }
        if(!values.password){
            errors.password="Required"
        }
        if(!values.confirmpassword){
            errors.confirmpasswor="Required"
        }
    }
   })
  console.log(formik.values)
  return (<>
    <h2 className="text-2xl font-bold mb-4 ml-[120px]">Sign Up</h2>
      <form className='ml-[120px]' onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-1">Email</label>
          <input 
          type="email" 
          id="name" 
          name="name"
           className="w-[400px] border border-gray-300 rounded px-3 py-2" 
          onChange={formik.handleChange} 
          value={formik.values.name} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-1">Password</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          className="w-[400px] border border-gray-300 rounded px-3 py-2"
           onChange={formik.handleChange} value={formik.values.password}  />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmpassword" className="block text-gray-700 font-bold mb-1">ConfirmPassword</label>
          <input type="password" id="password"
           name="confirmpassword" 
          className="w-[400px] border border-gray-300 rounded px-3 py-2"  
          onChange={formik.handleChange} value={formik.values.confirmpassword}
          />
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

