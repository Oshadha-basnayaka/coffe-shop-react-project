import {Component} from "react";
import axios from "axios";
import LoginPic from "../../../image/login/Group 55.png";
import {Link} from "react-router-dom";

interface SingUpProps {
    data: any;
}

interface SingUpState {

    name: string;
    password: string;
    location: string;
    username: string;
    role: string;
    contact: number;
}


export class SingUp extends Component <SingUpProps, SingUpState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4001`});
        this.state = {
            contact: 0, location: "", name: "", password: "", role: "", username: ""


        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }


    render() {
        return (
            <>

                <div className={"bg-gradient-to-r from-[#1B1B1B] to-[#535353] h-[100vh] "}>
                    <div className={"flex flex-col justify-center items-center pt-24 "}>
                        <h1 className="text-2xl text-end text-[#AB8B5A]">WelcomeBack</h1>
                        <h1 className="text-4xl text-end text-white ">singup</h1>
                    </div>

                    <div className={"flex justify-center pt-10"}>

                        <div className={'bg-[#AB8A5A] w-[1500px] rounded-2xl flex  '}>


                            <div className={"flex justify-start"}>
                                <img className={"w-[600px] h-[600px] mr-16 "} src={LoginPic}/>
                            </div>


                            <div className={"flex flex-col justify-center items-start gap-10 "}>


                                <div className="flex justify-center items-center gap-5">
                                    <form className={"flex flex-col  gap-3 "}>

                                        <h1 className={"text-2xl text-white"}>Your full Name</h1>
                                        <input className="" type="text"
                                               name="name"
                                               value={this.state.name}
                                               onChange={this.handleMessageInputOnChange}/>

                                        <h1 className={"text-2xl text-white"}>PassWord</h1>
                                        <input className="" type="text"
                                               name="password"
                                               value={this.state.password}
                                               onChange={this.handleMessageInputOnChange}/>

                                        <h1 className={"text-2xl text-white"}>Location</h1>
                                        <input className="" type="text"
                                               name="location"
                                               value={this.state.location}
                                               onChange={this.handleMessageInputOnChange}/>

                                    </form>

                                    <form className={"flex flex-col gap-3"}>

                                        <h1 className={"text-2xl text-white"}>User Name</h1>
                                        <input className="" type="text"
                                               name="username"
                                               value={this.state.username}
                                               onChange={this.handleMessageInputOnChange}/>

                                        <h1 className={"text-2xl text-white"}>your Role</h1>
                                        <input className="" type="text"
                                               name="role"
                                               value={this.state.role}
                                               onChange={this.handleMessageInputOnChange}/>

                                        <h1 className={"text-2xl text-white"}>Contact Number</h1>
                                        <input className="" type="text"
                                               name="contact"
                                               value={this.state.contact}
                                               onChange={this.handleMessageInputOnChange}/>
                                    </form>
                                </div>

                                <div>

                                    <button
                                        className=" border-2 border-[#000000] bg-neutral-900 box-border text-white font-bold px-5  flex flex-col"
                                        type={"button"} onClick={this.onSendBtnClick}>
                                        Sing Up
                                    </button>


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


    handleMessageInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }


    private onSendBtnClick = () => {
        try {
            this.api.post('/users/save', {
                name: this.state.name,
                password: this.state.password,
                location: this.state.location,
                username: this.state.username,
                role: this.state.role,
                contact: this.state.contact
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                alert(jsonData);
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }


}


