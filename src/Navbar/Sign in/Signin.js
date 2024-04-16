import React from "react";
import Image from "./car1.jpg";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Signin = () => {

  let id = "306196973907-ad5u3k6frk7d024ak3iipcagi3v8lksg.apps.googleusercontent.com"
  return (
    <div className=" min-h-screen py-20  ">
      <div className="container mx-auto flex flex-col">
        <div className=" flex  flex-col lg:flex-row  h-auto w-8/12 bg-orange-100 shadow-lg shadow-slate-500 rounded-xl mx-auto overflow-hidden">
          <div className=" w-full lg:w-1/2 ">
            {/* img */}
            
            <img className=" bg-no-repeat bg-cover bg-center w-fit h-auto" src={Image}></img>
          </div>
          <div className="  w-full lg:w-1/2 py-16 px-16 bg-white  flex  flex-col  flex-wrap justify-center">
            {/* content */}
            <h1 className="text-4xl font-bold">Sign in </h1>
            <p className="py-6 ">Use your email to sign in</p>
            <form>
              <input
                className=" h-10 w-full border-2 border-black"
                type="text"
                placeholder="Enter Your Email"
              ></input>
              <br />
              <button className="border-black border-2 border-solid p-2 my-5  w-full hover:bg-stone-100   ">
                Continue
              </button>
              <p className="align-middle flex justify-center">
                or Sign in with
              </p>
              <GoogleOAuthProvider className="w-auto" clientId={id}>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse)
                  }}
                  onError={() => {
                    console.log("Login Failed")
                  }}
                />
                
              </GoogleOAuthProvider>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;


