import { Component } from "react";
import { Link } from "react-router-dom";
import LoginPic from "../../../image/login/Group 55.png";

export class Login extends Component {
  render() {
    return (
        <div className="bg-gradient-to-r from-[#1B1B1B] to-[#535353] min-h-screen flex flex-col justify-center items-center px-5 py-5">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl text-[#AB8B5A]">Welcome Back</h1>
          <h1 className="text-4xl text-white font-bold">Login</h1>
        </div>
  
        <div className="flex justify-center pt-10 w-full px-4">
          <div className="bg-[#AB8A5A] max-w-6xl w-full rounded-2xl p-8 shadow-lg">
            <div className="flex flex-wrap md:flex-nowrap">
              <div className="w-full md:w-1/2 flex justify-center">
                <img className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] object-cover rounded-xl" src={LoginPic} alt="Login" />
              </div>
  
              <div className="flex flex-col w-full md:w-1/2 pt-10 md:pt-40 px-4 md:px-10">
                <label className="text-2xl text-white mb-2">Email</label>
                <input className="p-2 mb-4 rounded-md" type="email" placeholder="Enter your email" />
  
                <label className="text-2xl text-white mb-2">Password</label>
                <input className="p-2 mb-4 rounded-md" type="password" placeholder="Enter your password" />
  
                <div className="flex justify-end mb-6">
                  <Link to="/forgot-password" className="text-white">Forgot Your Password?</Link>
                </div>
  
                <button className="bg-neutral-900 text-white font-bold py-2 px-5 rounded-md transition-transform transform hover:scale-105 mb-6">
                  <Link to="/">LOGIN</Link>
                </button>
  
                <div className="flex justify-center items-center gap-2 text-white">
                  <span>Don't have an account?</span>
                  <Link to="/signup" className="text-blue-300">Sign Up</Link>
                </div>
  
                <div className="text-center mt-4 text-white">
                  <Link to="/">Back To Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
