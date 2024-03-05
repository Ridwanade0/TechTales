import { useState } from "react"

const SignUp = ({onClick}) => {
    const [show, setshow]  = useState(false);
  return (
  
      <div className="flex justify-center items-center h-[70vh]">
        <form action="" className="w-2/6 p-5 ">
          <h2 className="mb-3 text-center text-3xl">Create an account</h2>
          <label htmlFor="" className="block mb-3">
            <span className="block text-xl ">Email</span>
            <input
              type="email"
              placeholder="youremail@email.com"
              className="focus:border-gray-500 focus:outline-none focus:ring focus:ring-blue-100 rounded-lg p-3 mt-2 bg-slate-800 text-base border-indigo-900 border-2 w-full"
            />
            <span className="block">Your email will be used to login to TechTales and send you notifications.</span>
          </label>
          <span className="float-end cursor-pointer" onClick={() => { setshow(!show) }}>{show ? "Hide" : "Show"}</span>
          <label htmlFor="" className="block mb-2">
            <span className="block text-xl">Password</span>
            <input
              type={show ? "text" : "password"}
              placeholder="*******"
              className="focus:border-gray-500 focus:outline-none focus:ring focus:ring-blue-100 p-3 rounded-lg mt-2 bg-slate-800 text-base border-indigo-900 border-2 w-full"
            />
          </label>
          <label htmlFor="" className="block mb-5">
            <span className="block text-xl">Confirm password</span>
            <input
              type={show ? "text" : "password"}
              placeholder="*******"
              className="focus:border-gray-500 focus:outline-none focus:ring focus:ring-blue-100 p-3 rounded-lg mt-2 bg-slate-800 text-base border-indigo-900 border-2 w-full"
            />
          </label>
          
          <div>
            <button
              className="bg-sky-600 p-2 text-xl rounded-md font-semibold float-right"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <br />
          <br />
          <div  onClick={onClick} className="text-gray-500 underline text-base cursor-pointer ">
          Already have an account? Login
        </div>
        </form>
      </div>
  
  )
}

export default SignUp