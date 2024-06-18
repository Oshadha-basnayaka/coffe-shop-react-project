import React, { Component, ChangeEvent } from "react";
import axios from "axios";
import LoginPic from "../../../image/login/Group 55.png";
import { Link } from "react-router-dom";

interface SignUpProps {
  data: any;
}

interface SignUpState {
  name: string;
  password: string;
  email: string;
  username: string;
  contact: string;
}

export class SignUp extends Component<SignUpProps, SignUpState> {
  private api: any;

  constructor(props: any) {
    super(props);
    this.api = axios.create({ baseURL: `http://localhost:4001` });
    this.state = {
      name: "",
      password: "",
      email: "",
      username: "",
      contact: "",


    };
  }

  handleMessageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<SignUpState, keyof SignUpState>);
  };

  handleSignUp = () => {
    const { name, password, email, username, contact } = this.state;
    this.api
      .post("/users/save", {
        name,
        password,
        email,
        username,
        contact,
      })
      .then((res: { data: any }) => {
        const jsonData = res.data;
        alert(jsonData); // You can replace this with a more user-friendly feedback mechanism
      })
      .catch((error: any) => {
        console.error("Axios Error", error);
      });
  };

  render() {
    return (
      <div className="bg-gradient-to-r from-[#1B1B1B] to-[#535353] min-h-screen flex flex-col justify-center items-center px-5 py-5">
        <div className="flex flex-col items-center ">
          <h1 className="text-2xl text-end text-[#AB8B5A]">Welcome Back</h1>
          <h1 className="text-4xl font-bold text-end text-white">Sign Up</h1>
        </div>

        <div className="flex justify-center pt-10">
          <div className="bg-[#AB8A5A] w-full max-w-[1500px] rounded-2xl flex">
            <div className="hidden md:flex justify-start">
              <img
                className="w-[600px] h-[600px] object-cover rounded-l-2xl"
                src={LoginPic}
                alt="Login Pic"
              />
            </div>

            <div className="flex flex-col justify-center items-start p-10 md:p-16 gap-10 w-full md:w-auto">
              <div className="flex justify-center items-center gap-5 w-full">
                <form className="flex flex-col gap-3 w-full">
                  <h1 className="text-2xl text-white">Your Full Name</h1>
                  <input
                    className="input-field rounded-md"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleMessageInputChange}
                  />

                  <h1 className="text-2xl text-white">Password</h1>
                  <input
                    className="input-field rounded-md"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleMessageInputChange}
                  />

                </form>

                <form className="flex flex-col gap-3 w-full">
                  <h1 className="text-2xl text-white">Username</h1>
                  <input
                    className="input-field rounded-md"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleMessageInputChange}
                  />


                  <h1 className="text-2xl text-white">Contact Number</h1>
                  <input
                    className="input-field rounded-md"
                    type="text"
                    name="contact"
                    value={this.state.contact}
                    onChange={this.handleMessageInputChange}
                  />
                </form>
              </div>
              <div>
                <form className="flex flex-col gap-3 w-full">
                  <h1 className="text-2xl text-white">email</h1>
                  <input
                    className="input-field rounded-md w-full "
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleMessageInputChange}
                  />
                </form>
              </div>

              <div className="flex justify-center items-center gap-5 w-full">
                <button
                  className="btn"
                  type="button"
                  onClick={this.handleSignUp}
                >
                  Sign Up
                </button>

                <h1 className="text-center">
                  <Link to="/"> -Back To Home-</Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
