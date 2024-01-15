import {Component} from "react";
import {Link} from "react-router-dom";
import LoginPic from '../../../image/login/Group 55.png';

export class Login extends Component {
    render() {
        return (
            <>
                <div className={"bg-gradient-to-r from-[#1B1B1B] to-[#535353]  flex justify-center "}>
                   <div className={" flex justify-center mt-10 flex-col items-center"}>
                       <h1 className="text-2xl text-end text-[#AB8B5A]">Discover</h1>
                       <h1 className="text-4xl text-end text-white ">OUR MENU</h1>
                   </div>

                    <div className={'bg-[#AB8A5A] flex justify-evenly'}>
                        <img src={LoginPic}/>

                    </div>

                </div>

            </>
        );
    }
}
