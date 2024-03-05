import { useState } from "react"

const SignIn = ({onClick}) => {
    const [show, setshow]= useState(false);
  return (
 
      <div className="flex justify-center items-center h-[70vh]">
        <form action="" className="w-2/6 p-5 ">
          <h2 className="mb-3 text-center text-3xl">Welcome Back.</h2>
          <label htmlFor="" className="block mb-3">
            <span className="block text-xl ">Email</span>
            <input
              type="email"
              placeholder="youremail@email.com"
              className="focus:border-gray-500 focus:outline-none focus:ring focus:ring-blue-100 rounded-lg p-3 mt-2 bg-slate-800 text-base border-indigo-900 border-2 w-full"
            />
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
          <div className="underline text-base text-gray-500">
            <a href="#">Forgot password?</a>
          </div>
          <div>
            <button
              className="bg-sky-600 p-2 text-xl rounded-md font-semibold float-right"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <br />
          <br />
          <div onClick={onClick} className="text-gray-500 underline text-base cursor-pointer">
            Don't have an account? Sign Up
          </div>
        </form>
      </div>

  )
}

export default SignIn