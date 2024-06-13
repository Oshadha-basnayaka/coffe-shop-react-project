import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

interface NavBarState {
  isMenuOpen: boolean;
}

class NavBar extends Component<{}, NavBarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div>
        <nav className="h-fit bg-gradient-to-r from-[#1B1B1B] to-[#535353] flex justify-between items-center top-0 z-10 w-[100%] py-2 px-6 md:px-12">
          <div>
            <h1 className="text-3xl text-white">Simon Caffe</h1>
          </div>

          <div className="md:hidden">
            <button
              onClick={this.toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center`}
          >
            <ul className="list-none flex flex-col md:flex-row mt-1 md:mt-0 md:space-x-6 items-center">
              <li className="text-[20px] text-white hover:text-orange-400 p-2">
                <Link to="/">Home</Link>
              </li>
              <li className="text-[20px] text-white hover:text-orange-400 p-2">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="text-[20px] text-white hover:text-orange-400 p-2">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="text-[20px] text-white hover:text-orange-400 p-2">
                <Link to="/about">About</Link>
              </li>
              <li className="text-[20px] text-white hover:text-orange-400 p-2">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="mt-2 md:mt-0 ml-5">
              <button className="text-white hover:text-orange-400 px-5 py-2 bg-orange-400 hover:bg-black rounded animate-pulse">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
