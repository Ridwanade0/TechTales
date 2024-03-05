import { useState } from "react";
import SignIn from "../../Components/AuthForm/SignIn";
import SignUp from "../../Components/AuthForm/SignUp";

const Auth = () => {
  const [islogin, setislogin] = useState(true);

  return (
    <>
      {islogin ? (
        <div className="bg-slate-900 w-full h-[100vh] text-white">
          <div>
            <h1 className="text-3xl text-bold ps-2 pt-2 ">TechTales</h1>
          </div>
          <SignIn onClick={() => {setislogin(false)}} />
         
          </div>
      ) : (
        <div className="bg-slate-900 w-full h-[100vh] text-white">
          <div>
            <h1 className="text-3xl text-bold ps-2 pt-2 ">TechTales</h1>
          </div>
         
        <SignUp onClick={() => {setislogin(true)}} />
        
        </div>
      )}
    </>
  );
};

export default Auth;
