import { useFormik } from "formik";
import { Typography } from "antd";
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


const Profile = () => {
  const formik=useFormik({
    initialValues,
  })
 

  return (
    <div className="flex h-full ml-6 mb-[50px]">
      <form
        className=""
        style={{ width: "800px", height: "430px" }}
        
      >
        <Typography.Title level={3}>Guide-Profile</Typography.Title>
        <div className="flex mx-4">
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
        
          <div className="w-full  md:w-1/2 px-4">
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

export default Profile;