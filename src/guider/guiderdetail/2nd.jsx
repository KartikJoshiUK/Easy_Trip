import { useFormik } from "formik";

const initialValues={
    name:"",
    phone:"",
    dob:"",
    gender:"",
   qualification:"",
    address:"",
    experience:"",
    portfolio:""

}


const RegistrationForm = () => {
  const formik=useFormik({
    initialValues,
  })
  console.log(formik.values)

  return (
    <div className="flex items-center justify-center   h-full mb-[30px]">
      <form
        className="p-8 "
        style={{ width: "700px", height: "430px" }}
        
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
                onChange={formik.handleChange} 
                value={formik.values.name}
                required
              />
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
                 value={formik.values.phone}
                required
              />
            </div>
          </div>
        </div>
        {/* Other form fields */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
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
          value={formik.values.dob}
                required
              />
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
                value={formik.values.gender}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
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
                required
              />
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
                required
              ></textarea>
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
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="experience" className="block font-bold mb-1">
                Experience
              </label>
              <textarea
                id="experience"
                className="border-gray-400 border-solid border py-2 px-3 w-full rounded text-sm"
                onChange={formik.handleChange} 
                value={formik.values.experience}
                name="experience" 
              />
            </div>
           
          
          </div>
        </div>
        {/* <div className="text-right ">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded  relative w-full"
          >
            Register
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default RegistrationForm;
