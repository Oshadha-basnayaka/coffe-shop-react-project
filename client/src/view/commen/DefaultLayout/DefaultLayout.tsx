import React, {Component} from "react";

import NavBar from "../NavBar/NavBar";
import {Footer} from "../Footer/Footer";
import {MainContent} from "../MainContent/MainContent";

export class DefaultLayout extends Component {
    render() {
        return (
            <>

                <NavBar/>
                <MainContent/>
                <Footer/>


            </>
        );
    }
}
