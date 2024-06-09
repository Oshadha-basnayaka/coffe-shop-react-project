import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className=" h-fit     bg-gradient-to-r from-[#1B1B1B] to-[#535353] flex justify-between items-center fixed top-0 z-10 w-[100%] py-2">
          <div>
            <h1 className="text-3xl text-white  pl-28">Simon Caffe</h1>
          </div>

          <div className="flex mr-4 ">
            <ul className="list-none flex mt-1 pr-20 items-center  ">
              <li className="mr-2 text-[20px] text-white hover:text-orange-400 p-2">
                <Link to="/">Home</Link>
              </li>

              <li className="mr-2 text-[20px] text-white  hover:text-orange-400 p-2">
                <Link to="/menu"> Menu</Link>
              </li>

              <li className="mr-2 text-[20px] text-white  hover:text-orange-400 p-2">
                <Link to="/cart">Cart</Link>
              </li>

              <li className="mr-2 text-[20px] text-white  hover:text-orange-400 p-2">
                <Link to="/about"> About</Link>
              </li>

              <li className="mr-2 text-[20px] text-white  hover:text-orange-400 p-2">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <div>
              <button className="text-white hover:text-orange-400 px-5 py-2 bg-orange-400 hover:bg-black rounded animate-pulse">
                <Link to="/login"> Login</Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
