import {Component} from "react";
import {Link} from "react-router-dom";
import LoginPic from '../../../image/login/Group 55.png';

export class Login extends Component {
    render() {
        return (
            <>
                <div className={"bg-gradient-to-r from-[#1B1B1B] to-[#535353] h-[100vh] "}>
                    <div className={"flex flex-col justify-center items-center pt-24 "}>
                        <h1 className="text-2xl text-end text-[#AB8B5A]">WelcomeBack</h1>
                        <h1 className="text-4xl text-end text-white ">login</h1>
                    </div>

                   <div className={"flex justify-center pt-10"}>

                       <div className={'bg-[#AB8A5A] w-[1500px] rounded-2xl  '}>

                           <div className={"flex justify-start "}>
                              <div>
                                  <img className={"w-[600px] h-[600px] mr-16 "} src={LoginPic}/>
                              </div>

                               <div className={"flex flex-col pt-40  "}>

                                   <h1 className={"text-2xl text-white"}>Email</h1>
                                   <input className={""}></input>
                                   <h1 className={"text-2xl text-white"}>Password</h1>
                                   <input></input>

                                  <h1 className={"pl-52 text-white pb-10"}>Forget Your Password</h1>

                                   <button className={" border-2 border-[#000000] bg-neutral-900 box-border text-white font-bold px-5 animate-pulse"}>
                                       <Link to={"/"}> LOGIN</Link>
                                   </button>

                                  <div className={"flex gap-5"}>
                                      <h1>You Dont Haven’t Acoount ? </h1>
                                      <h1 className={"text-blue-300"}>
                                          <Link to={"/singup"}> - Sing Up-</Link>

                                      </h1>
                                  </div>

                                   <h1 className={"text-center"}>
                                       <Link to={"/"}> -Back To Home-</Link>

                                   </h1>
                               </div>
                           </div>

                       </div>

                   </div>


                </div>

            </>
        );
    }
}
